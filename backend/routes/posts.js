const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const postsCtrl = require('../controllers/posts');


router.get('/', postsCtrl.getAllPosts);
router.get('/:id', postsCtrl.getOnePost);
router.post('/', multer, postsCtrl.createPost);
router.put('/:id', multer, postsCtrl.modifyPost); //Dans un 2eme temps
router.delete('/:id', postsCtrl.deletePost);
router.post('/:id/like', postsCtrl.likePost); //Dans un 2eme temps


module.exports = router;