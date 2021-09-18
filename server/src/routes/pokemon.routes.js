const express = require('express');
const {
  getGenerations,
  getPokemonsByGenerationId,
} = require('../controllers/pokemon.controller');
const { verifyToken } = require('../middlewares/verifyToken');

const router = express.Router();

router.get('/', verifyToken, getGenerations);
router.get('/:generationId/pokemons', verifyToken, getPokemonsByGenerationId);

module.exports = router;
