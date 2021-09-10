import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Anchor, Box, Header, Nav } from 'grommet';
import { useAuthContext } from 'context';

const items = [
  { label: 'Profile', link: 'profile' },
  { label: 'Games', link: 'generations' },
];

const gravatarSrc =
  'https://cdn.dribbble.com/users/2192291/screenshots/7482012/media/e829a380ecd3b768f4c6c7a4e3dd63cb.jpg?compress=1&resize=400x300';

export const Navbar = () => {
  const { logout } = useAuthContext();
  return (
    <Header background="dark-1" pad="small">
      <Box direction="row" align="center" gap="small">
        <Avatar src={gravatarSrc} />
        <Anchor color="white" href="https://github.com/espinosakev24">
          Your name!
        </Anchor>
      </Box>
      <Nav direction="row">
        {items.map(({ link, label }, idx) => (
          <Link key={idx} to={link} style={{ textDecoration: 'none' }}>
            <Anchor label={label} key={label} color="white" />
          </Link>
        ))}
        <Anchor label="Logout" key="Logout" color="white" onClick={logout} />
      </Nav>
    </Header>
  );
};
