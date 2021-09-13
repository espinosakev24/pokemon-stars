const {
  getGenerations,
  getPokemonsByGenerationId,
} = require('../services/pokemon.service');

module.exports.getGenerations = (req, res) => {
  getGenerations().then((generations) => res.status(201).send(generations));
};

module.exports.getPokemonsByGenerationId = (req, res) => {
  const { generationId } = req.params;
  getPokemonsByGenerationId(generationId).then((pokemons) =>
    res.status(201).send(pokemons)
  );
};
