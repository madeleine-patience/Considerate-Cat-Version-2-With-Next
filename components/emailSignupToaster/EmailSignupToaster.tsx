import { Box, Snackbar, Typography, useTheme } from '@mui/material';
import { useState } from 'react';
import { filter } from '../../utils/filter';
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
        <Box
          tabIndex={0}
          onClick={() => setIsModalOpen(true)}
          sx={{
            position: 'relative',
            outline: 'none',
            '&:hover img, &:focus-visible img': {
              transform: 'translateY(-5px) scale(1.03)',
              filter: filter(palette.pinks.dark, 2)
            }
          }}
        >
          <Box
            component='img'
            src='/image/ToasterImage.png'
            sx={{
              width: 210,
              cursor: 'pointer',
              filter: filter('white', 2)
            }}
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
              color: palette.pinks.dark,
              boxShadow:
                'rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px',
              cursor: 'pointer'
            }}
          >
            <Typography variant='h6'>Keep In Touch</Typography>
            <Box
              component='button'
              aria-label='Close'
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
