'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Toaster } from '../components/toaster/Toaster';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import CatCardFlipper from '../components/catCardFlipper/CatCardFlipper';
import EmailSignUpModal from '../components/emailSignupModal/EmailSignupModal';
import PageContainer from '../components/pageContainer/PageContainer';
import RaisedButton from '../components/raisedButton/RaisedButton';
import type { ReactElement } from 'react';

const homePageMainImage = '/image/homepageImage.webp';

export default function HomeClient(): ReactElement {
  const router = useRouter();
  const theme = useTheme();
  const isSmallScreen: boolean = useMediaQuery(theme.breakpoints.down('md'));
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <PageContainer>
      <Box display='flex' justifyContent='center'>
        <Box
          component='img'
          src={homePageMainImage}
          alt='A whimsical illustration of a friendly cat seated at a kitchen table, performing a tarot reading from the Considerate Cat Tarot deck with a glass of hot tea nearby. The scene is framed by a cozy kitchen, with a lovely night sky visible through a window in the background.'
          width='100%'
          sx={{
            display: isSmallScreen ? 'none' : undefined,
            borderRadius: 4,
            boxShadow:
              'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px'
          }}
        />
      </Box>
      <Box
        sx={{
          p: 4,
          borderRadius: 3
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'alignItems',
            alignItems: 'center',
            flexDirection: isSmallScreen ? 'column' : 'row'
          }}
        >
          <CatCardFlipper />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              textAlign: 'center'
            }}
          >
            <Typography variant='body1'>
              Considerate Cat is a tarot deck that was published in 2018,
              brought to life by a community of folks on Kickstarter. Since
              then, the deck has been brought into many inspiring people&apos;s
              homes, featuring stories of rescue cats from across the world.
              Now, we are bringing the deck to life online! Here, you can have
              your cards read, learn about the cats that inspired the deck, and
              dive deeper into the artwork
            </Typography>
            <Typography variant='body1'>
              Also, Butters is patiently waiting to have his cards read. Click
              him to give him the reading he&apos;s been waiting for!
            </Typography>
            <RaisedButton
              buttonLabel='Get My Own Tarot Read!'
              onClick={() => {
                router.push('/tarot-read');
              }}
            />
          </Box>
        </Box>
      </Box>
      <Toaster
        type='custom'
        message='Keep In Touch'
        image='/image/ToasterImage.png'
        onClick={handleOpenModal}
      />
      <EmailSignUpModal isOpen={isModalOpen} setIsOpen={handleCloseModal} />
    </PageContainer>
  );
}
