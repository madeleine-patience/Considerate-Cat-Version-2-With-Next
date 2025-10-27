import { Typography } from '@mui/material';
import { PropsWithChildren } from 'react';

const ModalTitle = ({ children }: PropsWithChildren) => {
  return <Typography variant='h2'>{children}</Typography>;
};

export default ModalTitle;
