import { Box, Snackbar, Typography, useTheme } from '@mui/material';
import { useState } from 'react';
import { filter } from '../../theme/utils/filter';
import { CloseSvg } from '../../SVGs/CloseSvg';

interface Props {
  image?: string;
  message?: string;
  type: ToastType;
  onClick: () => void;
}

type ToastType = 'success' | 'error' | 'custom';

export const Toaster = ({ image, message, type, onClick }: Props) => {
  const { palette } = useTheme();
  const [isToasterOpen, setIsToasterOpen] = useState(true);

  const handleCloseToaster = () => {
    setIsToasterOpen(false);
  };

  const renderImage = () => {
    if (type === 'success') {
      return '/image/HubertFlower.png';
    }
    if (type === 'error') {
      return '/image/ClownError.png';
    }
    if (type === 'custom') {
      return image;
    }
  };

  const renderColorTypes = () => {
    if (type === 'success') {
      return 'greens';
    }
    if (type === 'error') {
      return 'reds';
    }
    return 'pinks';
  };

  const alertColor = renderColorTypes();

  return (
    <Snackbar open={isToasterOpen}>
      <Box
        tabIndex={0}
        onClick={onClick}
        sx={{
          position: 'relative',
          '&:hover img, &:focus-visible img': {
            transform: 'translateY(0)',
            filter: filter(palette[alertColor].dark, 2)
          },
          '&:has(button:hover) img': {
            transform: 'translateY(65px)',
            filter: filter(palette[alertColor].dark, 2)
          },
          '&:hover .message-box': {
            backgroundColor: '#FFF'
          }
        }}
      >
        <Box
          sx={{
            overflow: 'clip'
          }}
        >
          <Box
            component='img'
            src={renderImage()}
            sx={{
              width: 210,
              cursor: 'pointer',
              filter: filter('white', 2),
              transform: 'translateY(45px)',
              transition: 'transform 180ms cubic-bezier(0.2, 0.4, 0.6, 1.5)',
              borderBottomLeftRadius: 100,
              borderBottomRightRadius: 100,
              overflow: 'hidden'
            }}
          />
        </Box>
        <Box
          className='message-box'
          sx={{
            position: 'absolute',
            backgroundColor: palette[alertColor].light,
            border: `2px solid ${palette[alertColor].dark}`,
            width: 200,
            height: 50,
            bottom: 0,
            borderRadius: 5,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: palette[alertColor].dark,
            boxShadow:
              type === 'custom'
                ? 'rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px'
                : '',
            cursor: 'pointer',
            transition:
              'box-shadow 120ms ease-in-out, background-color 120ms ease-in-out'
          }}
        >
          <Typography variant='h4'>{message}</Typography>
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
              backgroundColor: palette[alertColor].dark,
              border: `2px solid white`,
              color: 'white',
              width: 30,
              height: 30,
              bottom: 30,
              right: -10,
              cursor: 'pointer',
              transition: 'background-color 120ms ease-in-out',
              '&:hover': {
                backgroundColor: `${palette[alertColor].main}`
              },
              '&:hover svg': {
                stroke: palette[alertColor].dark
              }
            }}
          >
            <CloseSvg fillColor='white' size='16px' aria-label='Close' />
          </Box>
        </Box>
      </Box>
    </Snackbar>
  );
};
