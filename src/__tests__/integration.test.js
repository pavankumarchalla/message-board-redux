import React from "react";
import { mount, render, shallow } from "enzyme";
import moxios from "moxios";
import Root from "../Root";
import App from "../components/App";
import CommentList from "../components/comments/CommentList";

beforeEach(() => {
  moxios.install();
  moxios.stubRequest("https://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: [{ name: "some comment" }, { name: "something" }]
  });
});

afterEach(() => {
  moxios.uninstall();
});

it("should have called ComponentDidMount", () => {
  const mockDidMount = jest.fn();
  CommentList.prototype.componentDidMount = mockDidMount;
  mount(
    <Root>
      <CommentList />
    </Root>
  );

  expect(mockDidMount).toBeCalled();
  expect(mockDidMount.mock.calls.length).toBe(1);
  console.log(mockDidMount.mock);
});

// const mockCallback = jest.fn(x => 42 + x);
// forEach([0, 1], mockCallback);

// The mock function is called twice
// expect(mockCallback.mock.calls.length).toBe(2);

// The first argument of the first call to the function was 0
// expect(mockCallback.mock.calls[0][0]).toBe(0);

// The first argument of the second call to the function was 1
// expect(mockCallback.mock.calls[1][0]).toBe(1);

// The return value of the first call to the function was 42
// expect(mockCallback.mock.results[0].value).toBe(42);
