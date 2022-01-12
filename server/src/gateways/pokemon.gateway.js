const axios = require('axios');

const baseUrl = 'https://pokeapi.co/api/v2';
const ENDPOINTS = {
  generations: `${baseUrl}/generation`,
  pokemon: `${baseUrl}/pokemon`,
};

module.exports.getGenerations = () =>
  axios(ENDPOINTS.generations)
    .then(({ data: { results } }) =>
      results.map(({ url }) => axios(url).then(({ data }) => data))
    )
    .then((response) => Promise.all(response));

module.exports.getPokemonsByNames = (pokemonNames) =>
  Promise.all(
    pokemonNames.map((pokemonName) =>
      axios(`${ENDPOINTS.pokemon}/${pokemonName}`).then(({ data }) => data)
    )
  );

module.exports.getPokemonsByGenerationId = (generationId) =>
  axios(`${ENDPOINTS.generations}/${generationId}`)
    .then(({ data: { pokemon_species } }) =>
      pokemon_species.map(({ name: pokemonName }) =>
        axios(`${ENDPOINTS.pokemon}/${pokemonName}`)
          .then(({ data }) => data)
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

module.exports.getPokemonByName = (pokemonName) =>
  axios(`${ENDPOINTS.pokemon}/${pokemonName}`).then(({ data }) => data);
