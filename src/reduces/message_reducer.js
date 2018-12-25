export const messageReducer = (state = [], action) => {

    switch (action.type) {

        case "ADD_MESSAGE": 
            return [...state, action.message];

        case "DELETE_MESSAGE":
            let updatedMessages = state.filter(m => m !== action.message);
            return [...updatedMessages];

        default:
            return state;
    }
};