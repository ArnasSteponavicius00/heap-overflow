const express = require('express');
const router = express.Router();

const { auth } = require('../middleware/auth');
const { getPosts, createPosts, updatePost, deletePost, likePost, dislikePost} = require('../controllers/posts')

router.get('/', getPosts);
router.post('/', auth, createPosts);
// Update existing post route
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);
router.patch('/:id/dislikePost', auth, dislikePost);

module.exports = router;