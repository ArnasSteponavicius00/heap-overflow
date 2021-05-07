const express = require('express');
const router = express.Router();

const { auth } = require('../middleware/auth');
const { signin, signup, deleteUser } = require('../controllers/user.js');

router.post('/signin', signin);
router.post('/signup', signup);
router.delete('/:id', auth, deleteUser);

module.exports = router;