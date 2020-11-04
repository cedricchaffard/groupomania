export const getPosts = () => {

    return new Promise((res) => {
        res([
            { id: 1, title: 'Post 01', commentaire: 'Commentaire', likes: 0, image: "icon.png" },
            { id: 2, title: 'Post 02', commentaire: 'Commentaire', likes: 0, image: "icon.png" },
            { id: 4, title: 'Post 02', commentaire: 'Commentaire', likes: 0, image: "icon.png" },
            { id: 3, title: 'Post 03', commentaire: 'Commentaire', likes: 0, texte: 'texte texte texte textetexte textetexte texte' },

        ])
    })
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