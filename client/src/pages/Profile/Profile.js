import React, { useState, useEffect } from 'react';
import { PokemonCard } from 'components/PokemonCard';
import { Box, Grid } from 'grommet';
import http from 'services/http';
import { PokemonText } from 'components/Styled';

export const Profile = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    http
      .get('favorites')
      .then((favorites) => {
        console.log(favorites);
        setPokemons(favorites);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <Box pad="large">
      <PokemonText
        textAlign="center"
        margin={{ bottom: 'large' }}
        weight="bold"
        size="4xl"
      >
        My favorites
      </PokemonText>
      <Grid gap="small" columns={{ count: 'fit', size: 'medium' }}>
        {pokemons.map(({ isFavorite, name, defaultImage, height }, idx) => (
          <PokemonCard
            key={idx}
            isFavorite={true}
            name={name}
            image={defaultImage}
            height={height}
          />
        ))}
      </Grid>
    </Box>
  );
};
