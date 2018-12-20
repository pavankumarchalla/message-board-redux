import commentReducer from "../comment";
import * as actions from "../../actions/comment";

it("handles addComment action", () => {
  const initialState = [];
  const action = {
    type: "ADD_COMMENT",
    comment: "new comment"
  };
  const newState = commentReducer(initialState, action);
  expect(newState).toEqual(["new comment"]);
});

it("handles action with unknown type", () => {
  const initialState = [];
  const action = {
    type: "ADD_SOMETHING",
    comment: "new comment"
  };
  const newState = commentReducer(initialState, action);
  expect(newState).toEqual([]);
});
