const bcrypt = require('bcrypt');
const mysql = require('mysql2');
const jwt = require('jsonwebtoken');

const connection = mysql.createConnection({
    host: '51.38.50.145',
    port: 3306,
    user: 'cedric',
    password: 'cedric07',
    database: 'groupomania'
});

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            connection.query('INSERT INTO user(first_name, last_name, email, password) VALUES(?,?,?,?)', [req.body.first_name, req.body.last_name, req.body.email, hash],
                function(err, results) {
                    if (err) {
                        res.status(500).json({ error: "Erreur à l'insertion" })
                    }
                    res.status(201).end();
                })
        })
        .catch(error => res.status(400).json({ error }));
};

exports.login = (req, res, next) => {
    connection.query(
        'SELECT * FROM `user` WHERE `email` = ?', [req.body.email],
        function(err, results) {
            if (!results[0]) {
                res.status(401).json({ status: 'KO', error: 'User not found' })
                return;
            }
            const user = results[0] || {}

            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ status: 'KO', error: 'Mot de passe incorect ! ' });
                    }
                    res.status(200).json({
                        token: jwt.sign({ userId: user.id, admin: user.admin },
                            'RANDOM_TOKEN_SECRET', { expiresIn: '24h' }
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));
        }
    );
};

exports.getUsers = (req, res, next) => {
    connection.query(
        'SELECT * FROM `user`', [],
        function(err, results) {
            if (err) {
                res.status(500).json(err)
            }

            res.status(200).json(results)

        }
    )
};

exports.getMe = (req, res, next) => {

    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const userId = decodedToken.userId;

    connection.query(
        'SELECT * FROM `user` WHERE id = ?', [userId],
        function(err, results) {
            if (err) {
                res.status(500).json(err)
            }

            res.status(200).json(results[0])

        }
    )
};

exports.updateProfile = (req, res, next) => {

    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const userId = decodedToken.userId;

    connection.query(
        'UPDATE `user` SET first_name = ?, last_name = ?, email = ? WHERE id = ?', [req.body.first_name, req.body.last_name, req.body.email, userId],
        function(err, results) {
            if (err) {
                res.status(500).json(err)
            }

            res.status(200).json(results)

        }
    )
};

exports.deleteProfile = (req, res, next) => {

    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const userId = decodedToken.userId;

    connection.query(
        'DELETE FROM `user` WHERE id = ?', [userId],
        function(err, results) {
            if (err) {
                res.status(500).json(err)
            }

            res.status(204).end();

        }
    )
};