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
      <HeaderNavButton link='/'>Home </HeaderNavButton>
      <HeaderNavButton link='/tarot-read'>Tarot Reading</HeaderNavButton>
      <HeaderNavButton link='/card-directory'>Card Directory</HeaderNavButton>
      <HeaderNavButton link='/cat-directory'>Meet the Cats</HeaderNavButton>
    </List>
  );
};

export default HeaderNavigation;
