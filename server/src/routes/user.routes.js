const express = require('express');
const {
  createUser,
  getUserById,
} = require('../controllers/user.controller.js');
const asyncHandler = require('express-async-handler');

const router = express.Router();

router.get('/:id', asyncHandler(getUserById));
router.post('/register', createUser);

module.exports = router;
