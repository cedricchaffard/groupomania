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

        connection.query(
            'SELECT * FROM user WHERE id = ?', [userId],
            function(err, results) {
                if (err) {
                    res.status(500).json(err)
                }
                if (!results[0]) {
                    throw 'Invalid User ID';
                } else {
                    next();
                }
            })
    } catch {
        res.status(401).json({
            error: new Error('Invalid request !')
        });
    }
};