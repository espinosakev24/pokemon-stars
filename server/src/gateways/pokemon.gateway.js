const axios = require('axios');

// THIS URL THING WONT BE THIS WAY BUT ENVS
const baseUrl = 'https://pokeapi.co/api/v2';
const ENDPOINTS = {
  generations: `${baseUrl}/generation`,
  pokemon: `${baseUrl}/pokemon`,
};

module.exports.getGenerations = () => {
  return axios(ENDPOINTS.generations)
    .then(({ data: { results } }) =>
      results.map(({ url }) =>
        axios(url).then(
          ({ data: { id, name, pokemon_species, version_groups } }) => ({
            id,
            name,
            version_groups,
            pokemonAmount: pokemon_species.length,
          })
        )
      )
    )
    .then((response) => Promise.all(response));
};

module.exports.getPokemonsByGenerationId = (generationId) =>
  axios(`${ENDPOINTS.generations}/${generationId}`)
    .then(({ data: { pokemon_species } }) =>
      pokemon_species.map(({ name: pokemonName }) =>
        axios(`${ENDPOINTS.pokemon}/${pokemonName}`)
          .then(({ data: { name, height, sprites } }) => ({
            name,
            height,
            defaultImage:
              sprites.other.dream_world.front_default || sprites.front_default,
          }))
          .catch((error) => {
            console.error(error.response.data, error.response.status);
            return {
              name: pokemonName,
              height: 0,
              defaultImage: '',
            };
          })
      )
    )
    .then((data) => Promise.all(data));
