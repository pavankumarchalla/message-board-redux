const initialState = [];
export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRIVATE_MESSAGE":
      return [...state, action.message];
    case "DELETE_PRIVATE_MESSAGE":
      return state.filter(msg => msg !== action.message);
    default:
      return state;
  }
};
