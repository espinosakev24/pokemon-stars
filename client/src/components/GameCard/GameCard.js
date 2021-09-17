import React from 'react';
import { Box, Card, CardBody, CardFooter, Text } from 'grommet';
import { toRomanNumber } from 'helpers';
import { Link } from 'react-router-dom';
import { ElevatedCard } from 'components/Styled';

const Identifier = ({ children, title, subTitle, size, ...rest }) => (
  <Box gap="small" align="center" {...rest}>
    {children}
    <Box align="center">
      <Text size={size} weight="bold" align="center">
        {title}
      </Text>
      <Text size={size}>{subTitle}</Text>
    </Box>
  </Box>
);

export const GameCard = ({
  item: { id, pokemonAmount, name, subTitle, color },
  ...props
}) => (
  <Link
    style={{ textDecoration: 'none', color: 'inherit' }}
    to={`generations/${id}/pokemons`}
  >
    <ElevatedCard>
      <Card background={color} key={props.key}>
        <CardBody pad="medium">
          <Identifier
            pad="medium"
            title={name}
            subTitle={subTitle}
            size="medium"
            align="center"
          >
            <Text weight="bold" size="6xl" textAlign="center">
              G-{toRomanNumber(id).toLowerCase()}
            </Text>
          </Identifier>
        </CardBody>

        <CardFooter pad={{ horizontal: 'large', vertical: 'medium' }}>
          <Text size="small">{pokemonAmount} Pokemons</Text>
          <Link to={`/generations/${id}`}>
            <Text size="small" color="black" weight="bold">
              See details
            </Text>
          </Link>
        </CardFooter>
      </Card>
    </ElevatedCard>
  </Link>
);
