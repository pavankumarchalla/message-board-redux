export const messageReducer = (state = [], action) => {

    switch (action.type) {

        case "ADD_MESSAGE": 
            return [...state, action.message];

        case "DELETE_MESSAGE":
            let updatedMessages = state.filter(m => m !== action.message);
            return [...updatedMessages];

        case "LOAD_MESSAGES":
            return [...state, ...action.payload];

        case "LOAD_ERROR_MESSAGE":
            return [...state, action.payload];

        default:
            return state;
    }
};