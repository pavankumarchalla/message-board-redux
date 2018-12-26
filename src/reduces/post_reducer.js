export const postReducer = (state = [], action) => {

    switch (action.type) {

        case "ADD_POST": 
            return [...state, action.post];

        case "DELETE_POST":
            let updatedPosts = state.filter(m => m !== action.post);
            return [...updatedPosts];

        case "LOAD_POSTS":
            return [...state, ...action.payload.data.map(data => data.title)]

        default:
            return state;
    }
};