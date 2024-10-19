import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

const catFooterImage = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/considerate%20cat%20assets/catNamedShoe.png`;

const FlowerFooter = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        height: 'fit-content',
        background: 'linear-gradient(transparent, #a0b594)',
        display: 'flex'
      }}
    >
      <Box
        sx={{
          p: 8,
          width: '100%',
          backgroundImage: `url(${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/considerate%20cat%20assets/tulipFooter.png)`,
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
                background: '#ebdfbe',
                overflow: 'hidden',
                border: '20px solid #d1c3d6'
              }}
            >
              <Box
                component='img'
                sx={{ width: 300, position: 'relative', top: 10, right: 8 }}
                src={catFooterImage}
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
                background: '#9C6E4F',
                borderRadius: 5
              }}
            >
              <Typography variant='h6' fontWeight='600'>
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
