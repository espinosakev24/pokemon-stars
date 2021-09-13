const axios = require('axios');
const baseUrl = 'https://pokeapi.co/api/v2';
const ENDPOINTS = {
  generations: `${baseUrl}/generation`,
  pokemon: `${baseUrl}/pokemon`,
};

module.exports.getGenerations = () => {
  return new Promise((resolve, reject) => {
    const generations = axios(ENDPOINTS.generations).then(
      ({ data: { results } }) =>
        results.map(({ url }) =>
          axios(url).then(
            ({ data: { id, name, pokemon_species, version_groups } }) => ({
              id,
              name,
              // pokemon_species,
              version_groups,
              pokemonAmount: pokemon_species.length,
            })
          )
        )
    );

    generations.then((response) =>
      Promise.all(response).then((res) => resolve(res))
    );
  });
};

module.exports.getPokemonsByGenerationId = (generationId) => {
  return new Promise((resolve, reject) => {
    const pokemons = axios(`${ENDPOINTS.generations}/${generationId}`).then(
      ({ data: { pokemon_species } }) =>
        pokemon_species.map(({ name }) =>
          axios(`${ENDPOINTS.pokemon}/${name}`).then(
            ({ data: { name, height, sprites } }) => ({
              name,
              height,
              defaultImage: sprites.other.dream_world.front_default,
            })
          )
        )
    );
    pokemons.then((data) => Promise.all(data).then((res) => resolve(res)));
  });
};
