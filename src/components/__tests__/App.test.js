import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import CommentList from "../comments/CommentList";
import CommentForm from "../comments/CommentForm";
import Navbar from "../Navbar";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />);
});

it("should render Navbar", () => {
  expect(wrapper.find(Navbar).length).toEqual(1);
});
