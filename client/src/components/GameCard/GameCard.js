import React from 'react';
import { Box, Card, CardBody, CardFooter, Text } from 'grommet';

const Identifier = ({ children, title, subTitle, size, ...rest }) => (
  <Box gap="small" align="center" {...rest}>
    {children}
    <Box>
      <Text size={size} weight="bold">
        {title}
      </Text>
      <Text size={size}>{subTitle}</Text>
    </Box>
  </Box>
);

export const GameCard = ({ item, ...props }) => (
  <Card background={item.color} key={props.key}>
    <CardBody pad="medium">
      <Identifier
        pad="medium"
        title={item.title}
        subTitle={item.subTitle}
        size="medium"
        align="start"
      >
        {item.icon}
      </Identifier>
    </CardBody>
    <CardFooter pad={{ horizontal: 'large', vertical: 'medium' }}>
      <Text size="small">{item.message}</Text>
    </CardFooter>
  </Card>
);
