import React from 'react';

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

export const PokemonCard = ({ color }) => {
  const [favorite, setFavorite] = React.useState(false);

  return (
    <Grommet theme={theme}>
      <Box pad="medium" align="start">
        <Card elevation="large" width="medium" background={color}>
          <CardBody height="small">
            <Image
              fit="cover"
              src="//v2.grommet.io/assets/IMG_4245.jpg"
              a11yTitle="bridge"
            />
          </CardBody>
          <Box pad={{ horizontal: 'medium' }} responsive={false}>
            <Heading level="3" margin={{ vertical: 'medium' }}>
              Bridge
            </Heading>
            <Paragraph margin={{ top: 'none' }}>
              A structure carrying a road, path, railroad, or canal across a
              river, ravine, road, railroad, or other obstacle.
            </Paragraph>
          </Box>
          <CardFooter>
            <Box direction="row" align="center" gap="small">
              <Button
                icon={<Favorite color={favorite ? 'red' : undefined} />}
                hoverIndicator
                onClick={() => {
                  setFavorite(!favorite);
                }}
              />
              <Button icon={<ShareOption color="plain" />} hoverIndicator />
            </Box>
          </CardFooter>
        </Card>
      </Box>
    </Grommet>
  );
};
