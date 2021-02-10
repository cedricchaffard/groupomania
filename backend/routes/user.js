const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');
const auth = require('../middleware/auth');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/', auth, userCtrl.getUsers);
router.get('/me', auth, userCtrl.getMe);
router.put('/', auth, userCtrl.updateProfile);
router.delete('/', auth, userCtrl.deleteProfile);

module.exports = router;