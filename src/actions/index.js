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
