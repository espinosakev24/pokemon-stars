import React, { useEffect } from 'react';
import { Box, Grommet, Grid } from 'grommet';
import { GameCard } from 'components/GameCard';
import http from 'services/http';
import { PokemonText } from 'components/Styled';
import {
  Location,
  System,
  ShieldSecurity,
  Tasks,
  User,
  Wifi,
} from 'grommet-icons';

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

const data = [
  {
    color: 'blue',
    generationId: '1',
    icon: <Wifi size="xlarge" />,
    title: 'Remote Access',
    subTitle: 'Lights out Management (LOM)',
    message: 'Connected',
  },
  {
    color: 'green',
    generationId: '2',
    icon: <System size="xlarge" />,
    title: 'System',
    subTitle: 'Sub-system and Devices',
    message: 'Composable System',
  },
  {
    color: 'red',
    generationId: '3',
    icon: <User size="xlarge" />,
    title: 'User Sessions',
    subTitle: 'User Access on Server',
    message: '4 active sessions',
  },
  {
    color: 'purple',
    generationId: '4',
    icon: <Tasks size="xlarge" />,
    title: 'Logs',
    subTitle: 'Events, Integration, and Status',
    message: '204,353',
  },
  {
    color: 'orange',
    generationId: '5',
    icon: <Location size="xlarge" />,
    title: 'Beacons',
    subTitle: 'Unique identification light',
    message: '24 beacons connected',
  },
  {
    color: 'teal',
    generationId: '6',
    icon: <ShieldSecurity size="xlarge" />,
    title: 'Security',
    subTitle: 'Trusted Platform Module',
    message: 'No Module Connected',
  },
];

export const GenerationList = () => {
  useEffect(() => {
    http.get('games').then((res) => {
      console.log(res);
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

        <Grid gap="large" columns={{ count: 'fit', size: 'medium' }}>
          {data.map((val, idx) => (
            <GameCard item={val} key={idx} />
          ))}
        </Grid>
      </Box>
    </Grommet>
  );
};
