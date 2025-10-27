import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

const FlowerFooter = () => {
  const theme = useTheme();
  const { palette } = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        height: 'fit-content',
        background: `linear-gradient(transparent, ${palette.greens.light})`,
        display: 'flex'
      }}
    >
      <Box
        sx={{
          p: 8,
          width: '100%',
          backgroundImage: 'url(/image/tulipFooter.webp)',
          backgroundRepeat: 'repeat',
          backgroundSize: isSmallScreen ? 'cover' : 'contain',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <Box
            sx={{
              flexDirection: isSmallScreen ? 'column' : 'row',
              background: 'rgba(177, 210, 175, 0.8)',
              display: 'flex',
              alignItems: 'center',
              p: 10,
              borderRadius: 5,
              gap: 5
            }}
          >
            <Box
              sx={{
                width: 200,
                height: 200,
                borderRadius: '100%',
                background: palette.yellows.light,
                overflow: 'hidden',
                border: `20px solid${palette.purples.light} `
              }}
            >
              <Box
                component='img'
                sx={{ width: 300, position: 'relative', top: 10, right: 8 }}
                src='/image/catNamedShoe.webp'
                alt='Artwork depicting Shoe the cat with a friendly expression.'
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flex: 1,
                alignItems: 'center',
                flexDirection: 'column',
                textAlign: 'center',
                maxWidth: 600,
                p: 10,
                gap: 4,
                background: palette.browns.main,
                borderRadius: 5
              }}
            >
              <Typography variant='h5'>
                Considerate Cat is purrrrrently under construction. Hold onto
                your whiskers while we work our
                <b style={{ color: 'yellow' }}>
                  <i> ✨ magic! </i>
                </b>
              </Typography>

              <Box sx={{ display: 'flex', gap: 4 }}>
                <InstagramIcon sx={{ color: 'white', fontSize: '56px' }} />
                <EmailIcon sx={{ color: 'white', fontSize: '56px' }} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FlowerFooter;
