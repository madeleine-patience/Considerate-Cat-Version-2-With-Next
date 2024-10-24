import { List, useTheme } from '@mui/material';
import HeaderNavButton from './HeaderNavButton';

const HeaderNavigation = () => {
  const theme = useTheme();

  return (
    <List
      component='nav'
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
      <HeaderNavButton link='./'>Home </HeaderNavButton>
      <HeaderNavButton link='./TarotReadPage'>Tarot Reading</HeaderNavButton>
      <HeaderNavButton link='./CardDirectoryPage'>
        Card Directory
      </HeaderNavButton>
      <HeaderNavButton link='./CatDirectory'>Meet the Cats</HeaderNavButton>
    </List>
  );
};

export default HeaderNavigation;
