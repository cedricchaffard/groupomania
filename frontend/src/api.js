const posts = [
    { id: 1, title: 'Post 01', commentaires: [], likes: 0, image: "icon.png" },
    { id: 2, title: 'Post 02', commentaires: [], likes: 0, image: "icon.png" },
    { id: 4, title: 'Post 03', commentaires: [], likes: 0, image: "icon.png", texte: "toto" },
    { id: 3, title: 'Post 04', commentaires: [], likes: 0, texte: 'texte texte texte textetexte textetexte texte' },

];

export const getPosts = () => {

    // TODO: Appel à l'API GET /posts
    console.log('get posts')
    return new Promise((res) => {
        res(posts)
    })
}

export const getPost = (postId) => {
    const post = posts.find((p) => p.id === postId)
    return Promise.resolve(post)
}

export const addPost = (post) => {
    posts.push(post)
    return Promise.resolve()
}

export const modifyPost = (post) => {
    for(let i = 0; i < posts.length; i++){
        if(posts[i].id === post.id){
            posts[i].title = post.title;
            posts[i].texte = post.texte;
        }
    }
    return Promise.resolve();
}

export const getContacts = () => {

    return new Promise((res) => {
        res([
            { id: 1, name: 'Contact01', statut: 'Online' },
            { id: 2, name: 'Contact02', statut: 'Online' },
            { id: 3, name: 'Contact03', statut: 'Online' },
            
        ])
    })
}

export const getInfos = () => {

    return new Promise((res) => {
        res([
            { id: 1, title: 'Info01', details: 'details' },
            { id: 2, title: 'Info02', details: 'details des infos qui doivent défiler'},
        ])
    })
}

export const getPhotos = () => {

    return new Promise((res) => {
        res([
            { id: 1, image: "icon.png" },
            { id: 2, image: "icon.png"},
        ])
    })
}