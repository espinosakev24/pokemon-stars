const FavoriteModel = require('../models').Favorite;
const {
  getGenerations,
  getPokemonsByGenerationId,
  getPokemonByName,
} = require('../gateways/pokemon.gateway');
const { mapPokemon } = require('../utils/pokemons');

module.exports.getGenerations = () =>
  getGenerations().then((data) => data.map(mapPokemon));

module.exports.getGenerations = () =>
  getGenerations().then((data) =>
    data.map(({ id, name, pokemon_species, version_groups }) => ({
      id,
      name,
      version_groups,
      pokemonAmount: pokemon_species.length,
    }))
  );

module.exports.getPokemonsByGenerationId = async (id, userId) => {
  const favorites = await FavoriteModel.findAll({
    where: { userId },
    order: [['createdAt', 'DESC']],
    attributes: ['pokemonName'],
  });
  const favoritesSet = favorites.reduce((ac, { pokemonName }) => {
    return ac.add(pokemonName);
  }, new Set());

  return getPokemonsByGenerationId(id).then((data) =>
    data.map(({ name, height, sprites }) => ({
      isFavorite: favoritesSet.has(name),
      name,
      height,
      defaultImage: sprites
        ? sprites.other.dream_world.front_default || sprites.front_default
        : '',
    }))
  );
};

module.exports.getPokemonByName = async (pokemonName) =>
  getPokemonByName(pokemonName).then(({ name, height, sprites }) => ({
    name,
    height,
    defaultImage: sprites
      ? sprites.other.dream_world.front_default || sprites.front_default
      : '',
  }));
