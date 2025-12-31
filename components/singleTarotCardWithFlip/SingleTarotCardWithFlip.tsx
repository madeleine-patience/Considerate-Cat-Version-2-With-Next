import { Box } from '@mui/material';
import Image from 'next/image';

interface SingleTarotCardWithFlipAction {
  onClick?: () => void;
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
          onClick?.();
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
          overflow: 'hidden',
          "&[data-size='medium']": {
            width: '200px'
          },
          "&[data-size='small']": {
            width: '100px'
          },
          '& img': {
            display: 'block'
          }
        }}
      >
        <Image
          src='/image/welcome-cards/tarot-card-back.webp'
          alt='The tarot card back'
          width={200}
          height={200}
          style={{
            height: 'auto',
            width: '100%',
            objectFit: 'cover'
          }}
        />
      </Box>
      <Box
        data-size={size}
        sx={{
          borderRadius: 3,
          boxShadow: { boxShadow },
          transformOrigin: 'center center',
          position: 'absolute',
          backfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)',
          overflow: 'hidden',
          "&[data-size='medium']": {
            width: '200px'
          },
          "&[data-size='small']": {
            width: '100px'
          },
          '& img': {
            display: 'block'
          }
        }}
      >
        <Image
          src={image}
          alt={altText || ''}
          width={200}
          height={200}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </Box>
    </Box>
  );
};

export default SingleTarotCard;
