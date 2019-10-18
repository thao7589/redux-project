import { FETCH_POSTS, NEW_POSTS } from './type';

export const fetchPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => dispatch({
        type: FETCH_POSTS,
        payload: posts
    }));
}

export const addPosts = (postData) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
            'content-type': 'application/json'
        },  
    })
    .then(res => res.json())
    .then(post => dispatch({
        type: NEW_POSTS,
        payload: post
    }));
}