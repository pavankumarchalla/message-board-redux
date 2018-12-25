export const addPost = (post) => {
    return {type: "ADD_POST", post:post}
};

export const addMessage = (message) => {
    return {type: "ADD_MESSAGE", message: message}
};