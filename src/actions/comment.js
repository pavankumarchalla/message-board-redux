import Axios from "axios";

export const addComment = comment => {
  return {
    type: "ADD_COMMENT",
    comment: comment
  };
};

export const deleteComment = comment => {
  return {
    type: "DELETE_COMMENT",
    comment: comment
  };
};

export const fetchComments = () => {
  const promise = Axios.get("https://jsonplaceholder.typicode.com/comments");
  return {
    type: "FETCH_COMMENTS",
    payload: promise
  };
};
