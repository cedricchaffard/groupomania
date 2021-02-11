const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const hasRight = require('../middleware/has-right');
const multer = require('../middleware/multer-config');

const postsCtrl = require('../controllers/posts');


router.get('/', auth, postsCtrl.getAllPosts);
router.get('/:id', auth, postsCtrl.getOnePost);
router.post('/', auth, multer, postsCtrl.createPost);
router.put('/:id', auth, hasRight, multer, postsCtrl.modifyPost);
router.delete('/:id', auth, hasRight, postsCtrl.deletePost);
router.post('/:id/like', auth, postsCtrl.likePost);


module.exports = router;