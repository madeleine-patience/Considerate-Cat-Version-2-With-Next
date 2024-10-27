import { Typography, useTheme } from '@mui/material';
import { PropsWithChildren } from 'react';

const HeaderTitle = ({ children }: PropsWithChildren) => {
  const { palette } = useTheme();
  const theme = useTheme();

  return (
    <Typography
      variant='h1'
      fontWeight={400}
      color={palette.purples.contrastLightAAA}
      sx={{
        zIndex: 1,
        [theme.breakpoints.down('lg')]: {
          display: 'none'
        }
      }}
    >
      {children}
    </Typography>
  );
};

export default HeaderTitle;
