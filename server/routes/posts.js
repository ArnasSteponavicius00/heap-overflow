const express = require('express');
const router = express.Router();

const { getPosts, createPosts, updatePost, deletePost, likePost, dislikePost } = require('../controllers/posts')

router.get('/', getPosts);
router.post('/', createPosts);
// Update existing post route
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);
router.patch('/:id/dislikePost', dislikePost);

module.exports = router;