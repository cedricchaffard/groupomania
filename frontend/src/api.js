import axios from 'axios';

export const getPosts = () => {
    const token = localStorage.getItem('groupomania_token')
    return axios.get('http://localhost:3000/api/posts', {
            headers: { Authorization: 'Bearer ' + token }
        })
        .then(function(d) {
            return d.data
        })
}


export const getPost = (postId) => {
    const token = localStorage.getItem('groupomania_token')
    return axios.get('http://localhost:3000/api/posts/' + postId, {
            headers: {
                'Content-Type': "multipart/form-data",
                Authorization: 'Bearer ' + token
            }
        })
        .then(function(d) {
            return d.data
        })
}

export const addPost = (post) => {
    const token = localStorage.getItem('groupomania_token')
    return axios.post('http://localhost:3000/api/posts', post, { headers: { 'Content-Type': "multipart/form-data", Authorization: 'Bearer ' + token } })
        .then(function(reponse) {
            return reponse.data
        });
}

export const modifyPost = (postId, post) => {
    const token = localStorage.getItem('groupomania_token')
    return axios.put('http://localhost:3000/api/posts/' + postId, post, { headers: { 'Content-Type': "multipart/form-data", Authorization: 'Bearer ' + token } })
        .then(function(reponse) {
            return reponse.data
        });
}

export const getUsers = () => {
    const token = localStorage.getItem('groupomania_token')
    return axios.get('http://localhost:3000/api/users', {
            headers: { Authorization: 'Bearer ' + token }
        })
        .then(function(d) {
            return d.data
        })
}

export const getInfos = () => {
    const token = localStorage.getItem('groupomania_token')
    return axios.get('http://localhost:3000/api/posts', {
            headers: { Authorization: 'Bearer ' + token }
        })
        .then(function(d) {
            return d.data
        })
}

export const getPhotos = () => {
    const token = localStorage.getItem('groupomania_token')
    return axios.get('http://localhost:3000/api/posts', {
            headers: { Authorization: 'Bearer ' + token }
        })
        .then(function(d) {
            return d.data
        })
}

export const deletePost = (postId) => {
    const token = localStorage.getItem('groupomania_token')
    return axios.delete('http://localhost:3000/api/posts/' + postId, {
        headers: { Authorization: 'Bearer ' + token }
    })
}

export const likePost = (postId) => {
    const token = localStorage.getItem('groupomania_token')
    return axios.post('http://localhost:3000/api/posts/' + postId + '/like', {
        headers: { Authorization: 'Bearer ' + token }
    })
}

export const signin = (user) => {
    return axios.post('http://localhost:3000/api/users/login', user)
}