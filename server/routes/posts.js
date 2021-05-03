const express = require('express');
const router = express.Router();

const { getPosts, createPosts, updatePost, deletePost, likePost } = require('../controllers/posts')

router.get('/', getPosts);
router.post('/', createPosts);
// Update existing post route
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

module.exports = router;