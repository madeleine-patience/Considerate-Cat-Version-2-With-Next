import { Box, Typography, useTheme } from '@mui/material';
import { Modal } from '../modal';

export interface TarotInformationModalProps {
  onClick: () => void;
  handleClickAway: () => void;
  isOpen: boolean;
  cardTitle: string;
  suit: string;
  image: string;
  description: string;
  keyWords: string[];
}

const TarotInformationModal = ({
  isOpen,
  cardTitle,
  suit,
  image,
  description,
  keyWords,
  onClick
}: TarotInformationModalProps) => {
  const { palette, breakpoints } = useTheme();
  /**
   * TODO Replace components with role="button"
   */
  return (
    <Modal.Root open={isOpen} setIsOpen={onClick}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4,
          [breakpoints.up('md')]: {
            flexDirection: 'row'
          }
        }}
      >
        <Box
          component='img'
          src={image}
          sx={{ borderRadius: 2, width: '300px' }}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 'inherit' }}>
          <Typography variant='h2'>{cardTitle}</Typography>
          <Typography
            variant='h4'
            sx={{
              fontStyle: 'italic'
            }}
          >
            Suit : {suit}
          </Typography>
          <Typography>{description}</Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            {keyWords.map((keyword) => {
              return (
                <Typography
                  variant='h6'
                  key={keyword}
                  sx={{
                    p: 1,
                    width: 'fit-content',
                    borderRadius: '12px',
                    background: palette.pinks.main,
                    color: palette.pinks.contrastLightAAA
                  }}
                >
                  {keyword}
                </Typography>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Modal.Root>
  );
};

export default TarotInformationModal;
