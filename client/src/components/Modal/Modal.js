import React from 'react';

import { Layer } from 'grommet';

export const Modal = ({ open, renderContent }) => (
  <>{open && <Layer>{renderContent()}</Layer>}</>
);
