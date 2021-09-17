const express = require('express');
const {
  getFavorites,
  createFavorite,
} = require('../controllers/favorite.controller');
const { verifyToken } = require('../middlewares/verifyToken');

const router = express.Router();

router.get('/', verifyToken, getFavorites);
router.post('/', verifyToken, createFavorite);

module.exports = router;
