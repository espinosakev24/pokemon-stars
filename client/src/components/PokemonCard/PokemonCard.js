import React from 'react';
import { ElevatedCard } from 'components/Styled';
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Grommet,
  Image,
  Paragraph,
} from 'grommet';
import http from 'services/http';
import { Favorite, ShareOption } from 'grommet-icons';

const theme = {
  global: {
    font: {
      family: `Comic Sans MS, -apple-system,
         BlinkMacSystemFont, 
         "Segoe UI", 
         Roboto`,
    },
  },
  card: {
    elevation: 'none',
    background: 'light-2',
    footer: {
      pad: 'medium',
    },
  },
};

export const PokemonCard = ({ isFavorite, name, color, image, height }) => {
  const [favorite, setFavorite] = React.useState(isFavorite);
  const addFavorite = (pokemonName) => () => {
    http
      .post('favorites', { pokemonName })
      .then((addedPokemon) => {
        console.log('Pokemon added to favorites', addedPokemon);
        setFavorite((state) => !state);
      })
      .catch((err) => console.error('couldnt add pokemon to favorites', err));
  };
  const removeFavorite = (pokemonName) => () => {
    http
      .delete(`favorites/${pokemonName}`)
      .then((deleted) => setFavorite((state) => !state));
  };

  return (
    <Grommet theme={theme}>
      <Box pad="medium" align="start">
        <ElevatedCard>
          <Card elevation="large" width="medium" background={color}>
            <CardBody height="small">
              <Box height="medium" width="medium" pad="large">
                <Image
                  fit="contain"
                  src={
                    image ||
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png'
                  }
                  a11yTitle="bridge"
                />
              </Box>
            </CardBody>
            <Box pad={{ horizontal: 'medium' }} responsive={false}>
              <Heading level="3" margin={{ vertical: 'medium' }}>
                {name}
              </Heading>
              <Paragraph margin={{ top: 'none' }}>Height: {height}</Paragraph>
            </Box>
            <CardFooter>
              <Box direction="row" align="center" gap="small">
                <Button
                  icon={<Favorite color={favorite ? 'red' : undefined} />}
                  hoverIndicator
                  onClick={favorite ? removeFavorite(name) : addFavorite(name)}
                />
                <Button icon={<ShareOption color="plain" />} hoverIndicator />
              </Box>
            </CardFooter>
          </Card>
        </ElevatedCard>
      </Box>
    </Grommet>
  );
};
