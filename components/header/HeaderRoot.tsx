import { Box, useTheme } from '@mui/material';
import { PropsWithChildren } from 'react';

const HeaderRoot = ({ children }: PropsWithChildren) => {
  const { palette } = useTheme();
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: palette.purples.light,
        position: 'relative',
        zIndex: 1
      }}
    >
      {children}
      <Box
        sx={{
          zIndex: 0,
          backgroundColor: palette.purples.main,
          width: '100%',
          height: '50%',
          position: 'absolute',
          bottom: 0
        }}
      />
    </Box>
  );
};

export default HeaderRoot;
