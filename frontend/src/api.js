import axios from 'axios';

export const getPosts = () => {
    return axios.get('http://localhost:3000/api/posts')
        .then(function(d) {
            return d.data
        })
}


export const getPost = (postId) => {
    return axios.get('http://localhost:3000/api/posts/' + postId, { headers: { 'Content-Type': "multipart/form-data" } })
        .then(function(d) {
            return d.data
        })
}

export const addPost = (post) => {
    return axios.post('http://localhost:3000/api/posts', post, { headers: { 'Content-Type': "multipart/form-data" } })
        // TODO axios.post(url, data du post)
        .then(function(reponse) {
            return reponse.data
                //     return reponse.data
        });
    // return Promise.resolve()
}

export const modifyPost = (postId, post) => {
    //TODO axios.put
    return axios.put('http://localhost:3000/api/posts/' + postId, post, { headers: { 'Content-Type': "multipart/form-data" } })
        .then(function(reponse) {
            return reponse.data
        });
}

export const getUsers = () => {
    return axios.get('http://localhost:3000/api/users')
        .then(function(d) {
            return d.data
        })
}

export const getInfos = () => {
    return axios.get('http://localhost:3000/api/posts')
        .then(function(d) {
            return d.data
        })
}

export const getPhotos = () => {
    return axios.get('http://localhost:3000/api/posts')
        .then(function(d) {
            return d.data
        })
}

export const deletePost = (postId) => {
    return axios.delete('http://localhost:3000/api/posts/' + postId)
}

export const likePost = (postId) => {
    return axios.post('http://localhost:3000/api/posts/' + postId + '/like')
}