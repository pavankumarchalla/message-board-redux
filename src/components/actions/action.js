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

export const loadMessages = response => {
    return {type: "LOAD_MESSAGES", payload: response.data.map(value => value.title)};
}

export const loadErrorMessage = error => {
    return {type: "LOAD_ERROR_MESSAGE", payload: error.message}
}

export const getMessages = dispatch => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then (response => {
            dispatch(loadMessages(response))
        })
        .catch (error => {
            dispatch(loadErrorMessage(error));
            console.log(error)
        })
    }
};
