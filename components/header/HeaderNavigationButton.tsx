import { Box, Typography, useTheme } from '@mui/material';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

interface HeaderNavigationButtonProps extends PropsWithChildren {
  link: string;
}

const HeaderNavigationButton = ({
  children,
  link
}: HeaderNavigationButtonProps) => {
  const { palette } = useTheme();

  return (
    <Link href={link} style={{ textDecoration: 'none' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          minWidth: 200,
          cursor: 'pointer',
          borderRadius: 2,
          color: palette.purples.contrastLightAAA,
          backgroundColor: palette.purples.light,
          '&:hover': {
            backgroundColor: palette.pinks.light
          },
          '&:active': {
            outline: `2px solid ${palette.common.white}`,
            backgroundColor: palette.purples.main
          }
        }}
      >
        <Typography variant='h6' sx={{ textDecoration: 'none' }}>
          {children}
        </Typography>
      </Box>
    </Link>
  );
};

export default HeaderNavigationButton;
