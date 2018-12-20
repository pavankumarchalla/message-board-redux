import React from "react";
import { mount } from "enzyme";
import CommentList from "../comments/CommentList";
import Root from "../../Root";

let wrapped;

beforeEach(() => {
  let initialState = {
    comments: ["comment 1", "comment 2"]
  };
  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("comments are listed", () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
  expect(wrapped.find("div.card").length).toEqual(2);
});

it("comment texts should be correct", () => {
  expect(wrapped.render().text()).toContain("comment 1");
  expect(wrapped.render().text()).toContain("comment 2");
});
