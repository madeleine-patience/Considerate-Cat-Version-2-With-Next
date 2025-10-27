import { Box } from '@mui/material';

interface SingleTarotCardWithFlipAction {
  onClick: () => void;
}

type cardSize = 'small' | 'medium';

interface SingleTarotCardWithFlipProps extends SingleTarotCardWithFlipAction {
  image: string;
  isCardFlipped?: boolean;
  transitionDelay?: string;
  altText?: string;
  size?: cardSize;
}

const boxShadow =
  'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px';

const SingleTarotCard = ({
  image,
  isCardFlipped = true,
  transitionDelay,
  onClick,
  altText,
  size = 'medium'
}: SingleTarotCardWithFlipProps) => {
  /**
   * TODO Tarot flip should be factored to one button
   */
  return (
    <Box
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      role='button'
      tabIndex={0}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        transformStyle: 'preserve-3d',
        transition: isCardFlipped ? 'transform 800ms' : 'transform 0ms',
        transitionDelay: isCardFlipped ? transitionDelay : '',
        cursor: 'pointer',
        transform: isCardFlipped
          ? 'perspective(1000px) rotateY(180deg)'
          : 'perspective(1000px) rotateY(0deg)'
      }}
    >
      <Box
        data-size={size}
        sx={{
          borderRadius: 3,
          boxShadow: { boxShadow },
          backfaceVisibility: 'hidden',
          "&[data-size='medium']": {
            width: '200px'
          },
          "&[data-size='small']": {
            width: '75px'
          }
        }}
        component='img'
        src='/image/welcome-cards/tarot-card-back.webp'
        alt='The tarot card back'
      />
      <Box
        data-size={size}
        sx={{
          borderRadius: 3,
          boxShadow: { boxShadow },
          transformOrigin: 'center center',
          position: 'absolute',
          backfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)',
          "&[data-size='medium']": {
            width: '200px'
          },
          "&[data-size='small']": {
            width: '100px'
          }
        }}
        component='img'
        src={image}
        alt={altText}
      />
    </Box>
  );
};

export default SingleTarotCard;
