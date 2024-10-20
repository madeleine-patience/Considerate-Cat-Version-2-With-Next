import { Box, useTheme } from '@mui/material';
import HeaderNavigationButton from './HeaderNavigationButton';

export const HeaderNavigation = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        p: 4,
        gap: 4,
        zIndex: 1,
        display: 'flex',
        [theme.breakpoints.down('lg')]: {
          flexDirection: 'column'
        }
      }}
    >
      <HeaderNavigationButton link='./'>Home </HeaderNavigationButton>
      <HeaderNavigationButton link='./TarotReadPage'>
        Tarot Reading
      </HeaderNavigationButton>
      <HeaderNavigationButton link='./CardDirectoryPage'>
        Card Directory
      </HeaderNavigationButton>
      <HeaderNavigationButton link='./CatDirectory'>
        Meet the Cats
      </HeaderNavigationButton>
    </Box>
  );
};
