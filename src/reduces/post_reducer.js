export const postReducer = (state = [], action) => {

    switch (action.type) {

        case "ADD_POST": 
            return [...state, action.post];

        case "DELETE_POST":
             console.log(state)
            let updatedPosts = state.filter(m => m !== action.post);
            return [...updatedPosts];

        default:
            return state;
    }
};