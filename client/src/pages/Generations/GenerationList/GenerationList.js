import React, { useEffect, useState } from 'react';
import { Box, Grommet, Grid } from 'grommet';
import { GameCard } from 'components/GameCard';
import { push } from 'react-router-dom';
import http from 'services/http';
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
    icon: <Wifi size="xlarge" />,
    title: 'Remote Access',
    subTitle: 'Lights out Management (LOM)',
    message: 'Connected',
  },
  {
    color: 'green',
    icon: <System size="xlarge" />,
    title: 'System',
    subTitle: 'Sub-system and Devices',
    message: 'Composable System',
  },
  {
    color: 'red',
    icon: <User size="xlarge" />,
    title: 'User Sessions',
    subTitle: 'User Access on Server',
    message: '4 active sessions',
  },
  {
    color: 'purple',
    icon: <Tasks size="xlarge" />,
    title: 'Logs',
    subTitle: 'Events, Integration, and Status',
    message: '204,353',
  },
  {
    color: 'orange',
    icon: <Location size="xlarge" />,
    title: 'Beacons',
    subTitle: 'Unique identification light',
    message: '24 beacons connected',
  },
  {
    color: 'teal',
    icon: <ShieldSecurity size="xlarge" />,
    title: 'Security',
    subTitle: 'Trusted Platform Module',
    message: 'No Module Connected',
  },
];

export const GenerationList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    http.get('games').then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <Grommet theme={theme} full>
      <Box pad="large">
        <Grid
          gap="large"
          rows="medium"
          columns={{ count: 'fit', size: 'medium' }}
        >
          {data.map((val, idx) => (
            <GameCard item={val} key={idx} />
          ))}
        </Grid>
      </Box>
    </Grommet>
  );
};
