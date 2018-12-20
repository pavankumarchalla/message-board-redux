const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case "ADD_COMMENT":
      return [...state, action.comment];
    case "DELETE_COMMENT":
      return state.filter(comment => comment !== action.comment);
    default:
      return state;
  }
}
