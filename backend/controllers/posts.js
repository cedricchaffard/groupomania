const bcrypt = require('bcrypt');
// const Post = require('../models/post');
const fs = require('fs');
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

    let filename = '';
    if (req.file) {
        filename = req.file.filename;
    }
    //const filename = req.file ? req.file.filename : ''
    connection.query('INSERT INTO post(title, description, image, created) VALUES(?,?,?,NOW())', [req.body.title, req.body.description, filename],
        function(err, results) {
            if (err) {
                res.status(500).json({ error: "Erreur à l'insertion" })
            }
            res.status(201).end();
        })
};

exports.modifyPost = (req, res, next) => {
    connection.query(
        'SELECT * FROM post WHERE id = ?', [req.params.id],
        function(err, results) {
            if (err) {
                res.status(500).json(err)
            }
            const post = results[0]
            if (post.image && fs.existsSync('images/' + post.image)) {
                fs.unlinkSync('images/' + post.image)
            }
            let filename = '';
            if (req.file) {
                filename = req.file.filename;
            }

            connection.query(
                'UPDATE post SET title = ?, description = ?, image = ? WHERE id = ?', [req.body.title, req.body.description, filename, req.params.id],
                function(err, results) {
                    if (err) {
                        res.status(500).json({ error: "Erreur à la modification", err })
                    }
                    res.status(200).json({ status: 'OK' });
                })
        }
    )

};

exports.deletePost = (req, res, next) => {
    // DELETE FROM posts WHERE id = ?
    // TODO: Si image uploadée, la supprimer du serveur
    connection.query(
        'SELECT * FROM post WHERE id = ?', [req.params.id],
        function(err, results) {
            if (err) {
                res.status(500).json(err)
            }
            const post = results[0]
            if (post.image) {
                fs.unlinkSync('images/' + post.image)
            }

            connection.query(
                'DELETE FROM `post` WHERE `id` = ?', [req.params.id],
                function(err, results) {
                    if (err) {
                        res.status(500).json(err)
                    }
                    res.status(204).end()
                }

            )
        }

    )
};

exports.getAllPosts = (req, res, next) => {

    /*
SELECT post.*, (SELECT count(*) FROM `like` WHERE `like`.post_id = post.id) as likes, `like`.user_id
FROM post
LEFT JOIN `like` ON `like`.post_id = post.id
    */

    connection.query(
        "SELECT post.*, (SELECT count(*) FROM `like` WHERE `like`.post_id = post.id) as likes, (SELECT `like`.user_id = ? FROM `like` WHERE user_id = ? AND post_id = post.id) as liked FROM post", [1, 1],
        function(err, results) {
            if (err) {
                res.status(500).json(err)
            }

            /*for (let i = 0; i < results.length; i++) {
                results[i]['likes'] = 0;
                results[i]['liked'] = false;
            }*/
            res.status(200).json(results)

        }
    )
};

exports.getOnePost = (req, res, next) => {
    connection.query(
        'SELECT * FROM `post` WHERE `id` = ?', [req.params.id],
        function(err, results) {
            if (err) {
                res.status(401).json({ status: 'KO', error: 'Post not found' })
            }
            const post = results[0] // Index 0 du tablequ == 1er élément
            res.status(200).json(
                post
            );
        });
};

exports.likePost = (req, res, next) => {
    const postId = parseInt(req.params.id);
    //TODO: Récupérer le user id dans le token (voir auth plus tard)
    const userId = 1;
    connection.query(
        'INSERT INTO `like`(user_id, post_id) VALUES(?, ?)', [userId, postId],
        function(err, results) {
            if (err) {
                connection.query(
                    'DELETE FROM `like` WHERE user_id = ? AND  post_id = ?', [userId, postId],
                    function(errDelete, resultsDelete) {
                        if (errDelete) {
                            res.status(500).json({ error: errDelete })
                            return;
                        }
                        res.status(204).json({ status: 'OK' })
                    })
            } else {
                res.status(201).json({ status: 'OK' });
            }
        });
}

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