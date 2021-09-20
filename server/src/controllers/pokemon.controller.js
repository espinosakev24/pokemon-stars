const {
  getGenerations,
  getPokemonsByGenerationId,
  getPokemonByName,
} = require('../services/pokemon.service');

module.exports.getGenerations = (req, res) => {
  getGenerations().then((generations) => res.status(201).send(generations));
};

module.exports.getPokemonsByGenerationId = (req, res) => {
  const { generationId } = req.params;
  const { userId } = req.decoded;
  getPokemonsByGenerationId(generationId, userId).then((pokemons) =>
    res.status(201).send(pokemons)
  );
};

module.exports.getPokemonByName = (req, res) => {
  const { pokemonName } = req.params;

  getPokemonByName(pokemonName).then((data) => {
    res.status(201).json(data);
  });
};
