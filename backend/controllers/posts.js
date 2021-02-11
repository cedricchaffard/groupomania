const bcrypt = require('bcrypt');
const fs = require('fs');
const mysql = require('mysql2');
const jwt = require('jsonwebtoken');
const { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } = require('constants');

const connection = mysql.createConnection({
    host: '51.38.50.145',
    port: 3306,
    user: 'cedric',
    password: 'cedric07',
    database: 'groupomania'
});

exports.createPost = (req, res, next) => {

    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const userId = decodedToken.userId;

    let filename = '';
    if (req.file) {
        filename = req.file.filename;
    }
    connection.query('INSERT INTO post(title, description, publication, image, created, user_id) VALUES(?,?,?,?,NOW(), ?)', [req.body.title, req.body.description, req.body.publication, filename, userId],
        function(err, results) {
            if (err) {
                res.status(500).json({ error: "Erreur à l'insertion" })
            }
            res.status(201).end();
        })
};

exports.modifyPost = (req, res, next) => {
    //TODO Vérif de droit: Je suis admin ou l'auteur de post sinon 401
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
                'UPDATE post SET title = ?, description = ?, publication = ?, image = ? WHERE id = ?', [req.body.title, req.body.description, req.body.publication, filename, req.params.id],
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
    //TODO Vérif de droit: Je suis admin ou l'auteur de post sinon 401
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

    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const userId = decodedToken.userId;
    const admin = decodedToken.admin;

    connection.query(
        "SELECT post.*, (SELECT count(*) FROM `like` WHERE `like`.post_id = post.id) as likes, (SELECT `like`.user_id = ? FROM `like` WHERE user_id = ? AND post_id = post.id) as liked FROM post", [userId, userId],
        function(err, results) {
            if (err) {
                res.status(500).json(err)
            }

            for (let i = 0; i < results.length; i++) {
                results[i]['editable'] = admin === 1 || results[i].user_id === userId;
            }
            res.status(200).json(results)
            return;

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
            const post = results[0]
            res.status(200).json(
                post
            );
        });
};

exports.likePost = (req, res, next) => {

    const postId = parseInt(req.params.id);
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const userId = decodedToken.userId;

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