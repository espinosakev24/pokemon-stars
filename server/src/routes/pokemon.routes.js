const express = require('express');
const {
  getGenerations,
  getPokemonsByGenerationId,
  getPokemonByName,
} = require('../controllers/pokemon.controller');
const { verifyToken } = require('../middlewares/verifyToken');

const router = express.Router();

router.get('/', verifyToken, getGenerations);
router.get('/:generationId/pokemons', verifyToken, getPokemonsByGenerationId);
router.get('/pokemons/:pokemonName', getPokemonByName);

module.exports = router;
