import { Box, Snackbar, Typography, useTheme } from '@mui/material';
import { useState } from 'react';
import { filter } from '../../utils/filter';
import EmailSignUpModal from '../emailSignupModal/EmailSignupModal';
import { CloseSvg } from '../../SVGs/Close';

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
              transform: 'translateY(0)',
              filter: filter(palette.pinks.dark, 2)
            },
            '&:has(button:hover) img': {
              transform: 'translateY(65px)',
              filter: filter('white', 2)
            },
            '&:hover .keep-in-touch-box': {
              backgroundColor: '#FFF'
            }
          }}
        >
          <Box
            sx={{
              overflow: 'clip',
              height: '100%'
            }}
          >
            <Box
              component='img'
              src='/image/ToasterImage.png'
              sx={{
                width: 210,
                cursor: 'pointer',
                filter: filter('white', 2),
                transform: 'translateY(45px)',
                transition: 'transform 180ms cubic-bezier(0.2, 0.4, 0.6, 2)'
              }}
            />
          </Box>
          <Box
            className='keep-in-touch-box'
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
              cursor: 'pointer',
              transition:
                'box-shadow 120ms ease-in-out, background-color 120ms ease-in-out'
            }}
          >
            <Typography variant='h4'>Keep In Touch</Typography>
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
                cursor: 'pointer',
                transition: 'background-color 120ms ease-in-out',
                '&:hover': {
                  backgroundColor: `${palette.pinks.main}`
                },
                '&:hover svg': {
                  stroke: palette.pinks.dark
                }
              }}
            >
              <CloseSvg fillColor='white' size='16px' aria-label='Close' />
            </Box>
          </Box>
        </Box>
      </Snackbar>
      <EmailSignUpModal isOpen={isModalOpen} setIsOpen={handleCloseModal} />
    </>
  );
};

export default EmailSignUpToaster;
