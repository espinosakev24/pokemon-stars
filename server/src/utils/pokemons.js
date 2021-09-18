module.exports.mapPokemon = ({ name, height, sprites }) => ({
  name,
  height,
  defaultImage: sprites
    ? sprites.other.dream_world.front_default || sprites.front_default
    : '',
});
