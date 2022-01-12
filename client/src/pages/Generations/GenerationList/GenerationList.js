import React, { useEffect, memo } from 'react';
import { Box, Grommet, Grid, Spinner, Text } from 'grommet';
import { GameCard } from 'components/GameCard';
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
  card: {
    footer: {
      pad: { horizontal: 'medium', vertical: 'small' },
      background: '#FFFFFF27',
    },
  },
};

const colors = ['blue', 'green', 'red', 'purple', 'orange', 'teal'];
let colorIdx = -1;

export const GenerationList = memo(() => {
  const [generations, setGenerations] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    http.get('generations').then((res) => {
      setGenerations(
        res.map((element) => {
          if (colorIdx >= colors.length - 1) {
            colorIdx = -1;
          }
          colorIdx++;
          return {
            ...element,
            color: colors[colorIdx],
          };
        })
      );
      setLoading((state) => !state);
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
          Pokemon Generations
        </PokemonText>

        {loading ? (
          <Box>
            <Spinner
              size="xlarge"
              alignSelf="center"
              margin={{ bottom: '10px' }}
            />
            <Text alignSelf="center">Loading...</Text>
          </Box>
        ) : (
          <Grid gap="large" columns={{ count: 'fit', size: 'medium' }}>
            {generations.map((val, idx) => (
              <GameCard item={val} key={idx} />
            ))}
          </Grid>
        )}
      </Box>
    </Grommet>
  );
});
