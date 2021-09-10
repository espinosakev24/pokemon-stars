import { PokemonCard } from 'components/PokemonCard/PokemonCard';
import { PokemonText } from 'components/Styled';
import { Grommet, Box, Grid } from 'grommet';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import http from 'services/http';
import { Spinner } from 'components/Spinner';

const colors = [
  '#00C8FF',
  '#17EBA0',
  '#82FFF2',
  '#F740FF',
  '#FC6161',
  '#FFBC44',
  '#FFEB59',
];
let colorIdx = -1;

export const PokemonList = () => {
  const [loading, setLoading] = useState(true);
  const { generationId } = useParams();
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    http
      .get(`games/${generationId}/pokemons`)
      .then(({ pokemon_species }) => {
        setPokemons(pokemon_species);
        setLoading(false);
      })
      .catch((err) => {
        console.log('here the error', err);
      });
  }, [generationId]);
  return (
    <Grommet>
      <Box pad="large">
        <PokemonText
          textAlign="center"
          margin={{ bottom: 'large' }}
          weight="bold"
          size="4xl"
        >
          Pokemon list
        </PokemonText>
        {loading ? (
          <Spinner size="xlarge" />
        ) : (
          <Grid gap="large" columns={{ count: 'fit', size: 'medium' }}>
            {pokemons.map(({ name }, idx) => {
              if (colorIdx >= colors.length - 1) {
                colorIdx = -1;
              }
              colorIdx++;
              return <PokemonCard key={idx} color={colors[colorIdx]} />;
            })}
          </Grid>
        )}
      </Box>
    </Grommet>
  );
};
