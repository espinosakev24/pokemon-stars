const FavoriteModel = require('../models').Favorite;

module.exports.getFavorites = (userId) =>
  FavoriteModel.findAll({
    where: { userId },
  });

module.exports.createFavorite = (userId, pokemonName) =>
  FavoriteModel.create({
    userId,
    pokemonName,
  });
