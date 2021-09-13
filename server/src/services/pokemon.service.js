const {
  getGenerations,
  getPokemonsByGenerationId,
} = require('../gateways/pokemon.gateway');

module.exports.getGenerations = async () => {
  const generations = await getGenerations();
  return generations;
};

module.exports.getPokemonsByGenerationId = async (id) => {
  const pokemons = getPokemonsByGenerationId(id);
  return pokemons;
};
