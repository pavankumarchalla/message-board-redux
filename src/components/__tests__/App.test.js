import React from 'react'
import {mount} from 'enzyme'
import PublicForm from '../publicBoard/PublicForm'
import Root from '../../root';
import App from '../App'

it("renders a public form", () => {
    let wrapper = mount(
        <Root>
            <App />
        </Root>
    );

    expect(wrapper.find(PublicForm).length).toEqual(1);
});
