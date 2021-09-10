import React from 'react';

import { Box, Grommet, Spinner as GrommetSpinner } from 'grommet';

export const Spinner = ({ size }) => (
  <Grommet full align="center" justify="center">
    <Box
      align="center"
      justify="center"
      direction="row"
      gap="small"
      pad="small"
    >
      <GrommetSpinner size={size} />
    </Box>
  </Grommet>
);
