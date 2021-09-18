const express = require('express');
const {
  getFavorites,
  createFavorite,
  deleteFavorite,
} = require('../controllers/favorite.controller');
const { verifyToken } = require('../middlewares/verifyToken');

const router = express.Router();

router.get('/', verifyToken, getFavorites);
router.post('/', verifyToken, createFavorite);
router.delete('/:favoriteName', verifyToken, deleteFavorite);

module.exports = router;
