const jwt = require('jsonwebtoken');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '51.38.50.145',
    port: 3306,
    user: 'cedric',
    password: 'cedric07',
    database: 'groupomania'
});

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
        const userId = decodedToken.userId;
        const admin = decodedToken.admin;
        connection.query(
            'SELECT * FROM post WHERE id = ?', [req.params.id],
            function(err, results) {
                if (err) {
                    res.status(500).json(err)
                }
                if (admin === 1 || results[0].user_id === userId) {
                    next();
                } else {
                    res.status(401).json({
                        error: new Error('Invalid request !')
                    });
                }
            })
    } catch {
        res.status(401).json({
            error: new Error('Invalid request !')
        });
    }
};