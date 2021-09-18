const {
  createFavorite,
  getFavorites,
  deleteFavorite,
} = require('../services/favorite.service');

module.exports.getFavorites = (req, res) => {
  const { userId } = req.decoded;

  getFavorites(userId).then((favorites) => res.status(201).json(favorites));
};

module.exports.createFavorite = (req, res) => {
  const { pokemonName } = req.body;
  const { userId } = req.decoded;

  createFavorite(userId, pokemonName).then((newFavorite) =>
    res.status(201).json(newFavorite)
  );
};
module.exports.deleteFavorite = (req, res) => {
  const { favoriteName } = req.params;
  const { userId } = req.decoded;

  deleteFavorite(userId, favoriteName).then((deleted) =>
    res.status(201).json(deleted)
  );
};
