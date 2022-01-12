import React, { useEffect, memo } from 'react';
import { Box, Grommet, Spinner, Text, Button } from 'grommet';
import http from 'services/http';
import { useState } from 'react/cjs/react.development';

const theme = {
  global: {
    font: {
      family: `-apple-system,
         BlinkMacSystemFont, 
         "Segoe UI"`,
    },
    colors: {
      blue: '#00C8FF',
      green: '#17EBA0',
      teal: '#82FFF2',
      purple: '#F740FF',
      red: '#FC6161',
      orange: '#FFBC44',
      yellow: '#FFEB59',
    },
  },
};

export const PokemonDetail = memo(({ pokemonName, onCloseHandler }) => {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState({});

  const onClose = () => {
    onCloseHandler();
  };

  useEffect(() => {
    http.get(`generations/pokemons/${pokemonName}`).then((res) => {
      setPokemon(res);
      setLoading((s) => !s);
    });
  }, [pokemonName]);

  useEffect(() => {
    console.info(pokemon);
  }, [pokemon]);

  return (
    <Grommet theme={theme}>
      <Box pad="large">
        <Text textAlign="center" weight="bold" size="large">
          Pokemon Detail
        </Text>

        <Box
          align="center"
          justify="center"
          gap="small"
          direction="row"
          alignSelf="center"
          pad="large"
        >
          {loading ? (
            <>
              <Spinner />
              <Text>Loading...</Text>
            </>
          ) : (
            <Text>
              Detail UI pending, pokemon info: {JSON.stringify(pokemon)}
              <br /> <Button onClick={onClose}>Close</Button>
            </Text>
          )}
        </Box>
      </Box>
    </Grommet>
  );
});
