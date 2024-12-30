import { Box, Snackbar, Typography, useTheme } from '@mui/material';
import { useState } from 'react';
import EmailSignUpModal from '../emailSignupModal/EmailSignupModal';
const EmailSignUpToaster = () => {
  const { palette } = useTheme();
  const [isToasterOpen, setIsToasterOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseToaster = () => {
    setIsToasterOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Snackbar open={isToasterOpen}>
        <Box onClick={() => setIsModalOpen(true)} sx={{ position: 'relative' }}>
          <Box
            component='img'
            src='/image/ToasterImage.png'
            sx={{ width: 210, cursor: 'pointer' }}
          />
          <Box
            sx={{
              position: 'absolute',
              backgroundColor: palette.pinks.light,
              border: `2px solid ${palette.pinks.dark}`,
              width: 200,
              height: 50,
              bottom: 0,
              borderRadius: 5,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: palette.pinks.dark
            }}
          >
            <Typography variant='h6'>Keep In Touch</Typography>
            <Box
              component='button'
              onClick={(e) => {
                e.stopPropagation();
                handleCloseToaster();
              }}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                borderRadius: '100%',
                backgroundColor: palette.pinks.dark,
                border: `2px solid white`,
                color: 'white',
                width: 30,
                height: 30,
                bottom: 30,
                right: -10,
                cursor: 'pointer'
              }}
            >
              <Typography>X</Typography>
            </Box>
          </Box>
        </Box>
      </Snackbar>
      <EmailSignUpModal isOpen={isModalOpen} setIsOpen={handleCloseModal} />
    </>
  );
};

export default EmailSignUpToaster;
