import React from 'react'
import moxios from 'moxios';
import { mount } from "enzyme";
import PublicBoard from '../components/publicBoard/PublicBoard';
import Root from '../Root';

beforeEach(() => {
    moxios.install();

    moxios.stubRequest("https://jsonplaceholder.typicode.com/posts", {
        status: 200,
        response: [
            { id: 1, title: "mock ajax call 1"},
            { id: 2, title: "mock ajax call 2"}
        ]
    })
});


afterEach(() => {
    moxios.uninstall();
});

it('should list mock ajax data', done => {
    let wrapper = mount(
        <Root>
          <PublicBoard />
        </Root>
    );
    wrapper.find("button.btn-success").simulate('click');

    moxios.wait(() => {
        wrapper.update();
        expect(wrapper.find("div.card").length).toEqual(4);
        done();
        wrapper.unmount();
    })
});