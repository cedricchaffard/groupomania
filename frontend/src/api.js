export const getPosts = () => {

    return new Promise((res) => {
        res([
            { id: 1, title: 'Post 01', commentaire: 'Commentaire', likes: 0, image: "/src/assets/images/groupomania/icon.png" },
            { id: 2, title: 'Post 02', commentaire: 'Commentaire', likes: 0, image: "/src/assets/images/groupomania/icon.png" },
            { id: 3, title: 'Post 03', commentaire: 'Commentaire', likes: 0, texte: 'texte texte texte textetexte textetexte texte' },

        ])
    })
}

export const getContacts = () => {

    return new Promise((res) => {
        res([
            { id: 1, name: 'Contact01' }
        ])
    })
}

export const getInfos = () => {

    return new Promise((res) => {
        res([
            { id: 1, title: 'Infos01' },
        ])
    })
}