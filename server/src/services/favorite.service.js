const FavoriteModel = require('../models').Favorite;
const { getPokemonsByNames } = require('../gateways/pokemon.gateway');
const { mapPokemon } = require('../utils/pokemons');

module.exports.getFavorites = (userId) =>
  FavoriteModel.findAll({
    where: { userId },
    order: [['createdAt', 'DESC']],
    attributes: ['pokemonName'],
  })
    .then((pokemonNames) => pokemonNames.map(({ pokemonName }) => pokemonName))
    .then((pokemonArray) =>
      getPokemonsByNames(pokemonArray).then((pokemons) =>
        pokemons.map(mapPokemon)
      )
    );

module.exports.createFavorite = (userId, pokemonName) =>
  FavoriteModel.create({
    userId,
    pokemonName,
  });

module.exports.deleteFavorite = (userId, pokemonName) =>
  FavoriteModel.destroy({
    where: {
      userId,
      pokemonName,
    },
  });
