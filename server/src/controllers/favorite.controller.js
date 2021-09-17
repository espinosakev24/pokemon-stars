const {
  createFavorite,
  getFavorites,
} = require('../services/favorite.service');

module.exports.getFavorites = (req, res) => {
  const { userId } = req.decoded;

  getFavorites(userId).then((favorites) => res.status(201).json(favorites));
};

module.exports.createFavorite = async (req, res) => {
  const { pokemonName } = req.body;
  const { userId } = req.decoded;

  createFavorite(userId, pokemonName).then((newFavorite) =>
    res.status(201).json(newFavorite)
  );
};
