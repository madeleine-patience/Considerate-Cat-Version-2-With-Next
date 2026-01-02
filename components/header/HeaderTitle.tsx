import { Box, useTheme } from '@mui/material';

const HeaderTitle = () => {
  const titleImage = '/image/titleImage.png';
  const theme = useTheme();

  return (
    <>
      <Box
        component='img'
        src={titleImage}
        alt='Considerate Cat'
        sx={{
          width: '450px',
          p: 4,
          [theme.breakpoints.down('md')]: {
            display: 'none'
          }
        }}
      />
    </>
  );
};

export default HeaderTitle;
