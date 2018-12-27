import React from "react";
import { mount } from "enzyme";
import Root from "../../../Root";
import PublicList from "../../publicBoard/PublicList";

let wrapper;
const hardCoded = {
  posts: [{ id: 1, title: "Pavan" }, { id: 2, title: "Kumar" }]
};

beforeEach(() => {
  wrapper = mount(
    <Root initialState={hardCoded}>
      <PublicList />
    </Root>
  );
});

afterEach(() => {
  wrapper.unmount();
});

it("should render 2 card divs", () => {
  expect(wrapper.find("div.card").length).toBe(2);
});

it("should render the correct text inside", () => {
  expect(wrapper.render().text()).toContain("Pavan");
  expect(wrapper.render().text()).toContain("Kumar");
});