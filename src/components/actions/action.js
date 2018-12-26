import axios from 'axios'

export const addPost = (post) => {
    return {type: "ADD_POST", post}
};

export const addMessage = (message) => {
    return {type: "ADD_MESSAGE", message}
};

export const deletePost = (post) => {
    return {type: "DELETE_POST", post}
};

export const deleteMessage = (message) => {
    return {type: "DELETE_MESSAGE", message}
};

export const getPosts = () => {
    const src = axios.get('https://jsonplaceholder.typicode.com/posts')
    return {type: "LOAD_POSTS", payload: src};
}