//const Post = require('../models/post');
const fs = require('fs');
const { json } = require('body-parser');

exports.createPost = (req, res, next) => {
    const postObject = JSON.parse(req.body.sauce);
    delete postObject._id;
    const post = new Post({
        ...postObject,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
    post.save()
        .then(() => res.status(201).json({ message: 'Post sauvegardé !' }))
        .catch(error => res.status(400).json({ error }));
};

exports.getOnePost = (req, res, next) => {
    Post.findOne({ _id: req.params.id })
        .then(post => res.status(200).json(post))
        .catch(error => res.status(404).json({ error }));
};

exports.modifyPost = (req, res, next) => {
    const postObject = req.file ? {
        ...JSON.parse(req.body.post),
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body };
    Post.updateOne({ _id: req.params.id }, { ...postObject, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Post modifié !' }))
        .catch(error => res.status(400).json({ error }));
};

exports.deletePost = (req, res, next) => {
    Post.findOne({ _id: req.params.id })
        .then(post => {
            const filename = post.imageUrl.split('/images/')[1];
            fs.unlink(`images/${filename}`, () => {
                Post.deleteOne({ _id: req.params.id })
                    .then(() => res.status(200).json({ message: 'Post supprimé !' }))
                    .catch(error => res.status(400).json({ error }));
            });
        })
        .catch(error => res.status(500).json({ error }));
};

exports.getAllPosts = (req, res, next) => {
    Post.find()
        .then(posts => res.status(200).json(posts))
        .catch(error => res.status(400).json({ error }));
};

exports.likePost = (req, res, next) => {
    if (req.body.like === 1) {
        Post.updateOne({ _id: req.params.id }, { $push: { usersLiked: req.body.userId }, $inc: { likes: 1 } })
            .then((post) => {
                res.status(200).json({
                    message: 'Like modifié !'
                })
            })
            .catch(error => res.status(400).json({ error }));
    } else if (req.body.like === -1) {
        Post.updateOne({ _id: req.params.id }, { $push: { usersDisliked: req.body.userId }, $inc: { dislikes: 1 } })
            .then((post) => {
                res.status(200).json({
                    message: 'Like modifié !'
                })
            })
    } else {
        Post.findOne({ _id: req.params.id })
            .then((post) => {
                if (post.usersLiked.includes(req.body.userId)) {
                    Post.updateOne({ _id: req.params.id }, { $pull: { usersLiked: req.body.userId }, $inc: { likes: -1 } })
                        .then((post) => {
                            res.status(200).json({
                                message: 'Like modifié !'
                            })
                        })
                } else {
                    Post.updateOne({ _id: req.params.id }, { $pull: { usersDisliked: req.body.userId }, $inc: { dislikes: -1 } })
                        .then((post) => {
                            res.status(200).json({
                                message: 'Like modifié !'
                            })
                        })

                }
            })
    }
}