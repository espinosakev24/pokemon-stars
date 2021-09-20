import React from 'react';

import { Box, Layer, Spinner, Text } from 'grommet';

export const Modal = ({ open }) => (
  <>
    {open && (
      <Layer>
        <Box
          align="center"
          justify="center"
          gap="small"
          direction="row"
          alignSelf="center"
          pad="large"
        >
          <Spinner />
          <Text>Loading...</Text>
        </Box>
      </Layer>
    )}
  </>
);
