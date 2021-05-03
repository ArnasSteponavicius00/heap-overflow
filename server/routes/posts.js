const express = require('express');
const router = express.Router();

const { getPosts, createPosts, updatePosts } = require('../controllers/posts')

router.get('/', getPosts);
router.post('/', createPosts);
// Update existing post route
router.patch('/:id', updatePosts);

module.exports = router;