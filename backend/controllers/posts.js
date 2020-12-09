// const Post = require('../models/post');
// const fs = require('fs');
// const { json } = require('body-parser');
const mysql = require('mysql2');
// const { title } = require('process');
// const { post } = require('../app');

const connection = mysql.createConnection({
    host: '51.38.50.145',
    port: 3306,
    user: 'cedric',
    password: 'cedric07',
    database: 'groupomania'
});

exports.createPost = (req, res, next) => {
    connection.query('INSERT INTO post(title, description, image, datetime) VALUES(?,?,?,?)',
        [req.body.title, req.body.description, req.body.image, req.body.datetime],
        function (err, results) {
            if (err) {
                res.status(500).json({ error: "Erreur à l'insertion" })
            }
            res.status(201).end();
        })
        .catch(error => res.status(400).json({ error }));
};

// exports.getOnePost = (req, res, next) => {
//     // connection.query(
//     //     'SELECT * FROM `posts` WHERE ìd`= ?,
//     //     [req.body.title,req.body.description]
//     // )
//     Post.findOne({ _id: req.params.id })
//         .then(post => res.status(200).json(post))
//         .catch(error => res.status(404).json({ error }));
// };

// exports.modifyPost = (req, res, next) => {
//     const postObject = req.file ? {
//         ...JSON.parse(req.body.post),
//         imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
//     } : { ...req.body };
//     Post.updateOne({ _id: req.params.id }, { ...postObject, _id: req.params.id })
//         .then(() => res.status(200).json({ message: 'Post modifié !' }))
//         .catch(error => res.status(400).json({ error }));
// };

// exports.deletePost = (req, res, next) => {
//     // DELETE FROM posts WHERE id = ?
//     Post.findOne({ _id: req.params.id })
//         .then(post => {
//             const filename = post.imageUrl.split('/images/')[1];
//             fs.unlink(`images/${filename}`, () => {
//                 Post.deleteOne({ _id: req.params.id })
//                     .then(() => res.status(200).json({ message: 'Post supprimé !' }))
//                     .catch(error => res.status(400).json({ error }));
//             });
//         })
//         .catch(error => res.status(500).json({ error }));
// };

exports.getAllPosts = (req, res, next) => {
    onnection.query(
        'SELECT * FROM `post` WHERE `title` = ?',
        [req.body.title],
        function(err, results) {
            if(!results[0]){
                res.status(401).json({ status: 'KO', error: 'User not found' })
            }
            const post = results[0]
            // bcrypt.compare(req.body.password, user.password)
            .then(valid => {
                if (!valid) {
                    return res.status(401).json({ status: 'KO', error: 'Mot de passe incorect ! ' });
                }
                res.status(200).json({
                    title: post.title,
                    // token: jwt.sign({ userId: user.id },
                    //     'RANDOM_TOKEN_SECRET', { expiresIn: '24h' }
                    // )
                });
            })
            .catch(error => res.status(500).json({ error }));
        }
      );
};





    // exports.likePost = (req, res, next) => {
    //     if (req.body.like === 1) {
    //         Post.updateOne({ _id: req.params.id }, { $push: { usersLiked: req.body.userId }, $inc: { likes: 1 } })
    //             .then((post) => {
    //                 res.status(200).json({
    //                     message: 'Like modifié !'
    //                 })
    //             })
    //             .catch(error => res.status(400).json({ error }));
    //     } else if (req.body.like === -1) {
    //         Post.updateOne({ _id: req.params.id }, { $push: { usersDisliked: req.body.userId }, $inc: { dislikes: 1 } })
    //             .then((post) => {
    //                 res.status(200).json({
    //                     message: 'Like modifié !'
    //                 })
    //             })
    //     } else {
    //         Post.findOne({ _id: req.params.id })
    //             .then((post) => {
    //                 if (post.usersLiked.includes(req.body.userId)) {
    //                     Post.updateOne({ _id: req.params.id }, { $pull: { usersLiked: req.body.userId }, $inc: { likes: -1 } })
    //                         .then((post) => {
    //                             res.status(200).json({
    //                                 message: 'Like modifié !'
    //                             })
    //                         })
    //                 } else {
    //                     Post.updateOne({ _id: req.params.id }, { $pull: { usersDisliked: req.body.userId }, $inc: { dislikes: -1 } })
    //                         .then((post) => {
    //                             res.status(200).json({
    //                                 message: 'Like modifié !'
    //                             })
    //                         })

    //                 }
    //             })
    //     }
    // }