export const addPrivateMessage = message => {
  return {
    type: "ADD_PRIVATE_MESSAGE",
    message: message
  };
};

export const deletePrivateMessage = message => {
  return {
    type: "DELETE_PRIVATE_MESSAGE",
    message: message
  };
};
