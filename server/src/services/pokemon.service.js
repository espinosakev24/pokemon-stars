const {
  getGenerations,
  getPokemonsByGenerationId,
} = require('../gateways/pokemon.gateway');

module.exports.getGenerations = getGenerations;

module.exports.getPokemonsByGenerationId = (id) => {
  return getPokemonsByGenerationId(id);
};
