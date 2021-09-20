import React, { useEffect, memo } from 'react';
import { Box, Grommet, Grid, Spinner } from 'grommet';
import { useParams } from 'react-router-dom';
import http from 'services/http';
import { PokemonText } from 'components/Styled';
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

export const PokemonDetail = memo(() => {
  const [loading, setLoading] = useState(true);
  const { pokemonName } = useParams();
  const [pokemon, setPokemons] = useState({});

  useEffect(() => {
    http.get(`generations/pokemons/${pokemonName}`).then((res) => {
      setPokemons(res);
      setLoading((s) => !s);
    });
  }, []);

  return (
    <Grommet theme={theme}>
      <Box pad="large">
        <PokemonText
          textAlign="center"
          margin={{ bottom: 'large' }}
          weight="bold"
          size="4xl"
        >
          Pokemon Detail
        </PokemonText>

        {loading ? <Spinner size="xlarge" /> : <Grid gap="large">zfghjk</Grid>}
      </Box>
    </Grommet>
  );
});
