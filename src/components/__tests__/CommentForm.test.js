import React from "react";
import { mount } from "enzyme";
import CommentForm from "../comments/CommentForm";
import Root from "../../Root";
import renderer from "react-test-renderer";

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Root>
      <CommentForm />
    </Root>
  );
});

it("match snapshot", () => {
  wrapper = renderer.create(
    <Root>
      <CommentForm />
    </Root>
  );
  expect(wrapper.toJSON()).toMatchSnapshot();
});

it("renders a textarea", () => {
  expect(wrapper.find("textarea").length).toEqual(1);
});

it("renders a blue color button", () => {
  expect(wrapper.find("button.btn-primary").length).toEqual(1);
});

it("should update value onChange", () => {
  wrapper.find("textarea").simulate("change", {
    target: { value: "new" }
  });
  wrapper.update();
  expect(wrapper.find("textarea").prop("value")).toEqual("new");
  expect(wrapper.find("textarea").prop("placeholder")).toEqual("comment");
});

it("should empty input text after submit", () => {
  wrapper.find("textarea").simulate("change", {
    target: { value: "new" }
  });
  wrapper.update();
  wrapper.find("button").simulate("click");
  wrapper.update();
  expect(wrapper.find("textarea").prop("value")).toEqual("");
});

// it("using mock to find if function was called", () => {
//   const onChangeSpy = jest.fn();
//   const onChange = onChangeSpy;
//   let newWrapper = mount(
//     <Root>
//       <CommentForm onChange={onChange} />
//     </Root>
//   );
//   expect(onChangeSpy).not.toHaveBeenCalled();
//   newWrapper.find("textarea").simulate("change", {
//     target: { value: "new" }
//   });
//   expect(onChangeSpy).toHaveBeenCalled();
// });
