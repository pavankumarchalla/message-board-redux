import React from "react";
import * as actions from "../comment";

it("check action type to be correct", () => {
  const action = actions.addComment("new comment");
  expect(action.type).toEqual("ADD_COMMENT");
});

it("check action payload to be correct", () => {
  const action = actions.addComment("new comment");
  expect(action.comment).toEqual("new comment");
});

it("check delete action type and payload", () => {
  const action = actions.deleteComment("new comment");
  expect(action.type).toEqual("DELETE_COMMENT");
  expect(action.comment).toEqual("new comment");
});
