import { Box } from '@mui/material';

const tarotBack = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/tarotcard/0.jpg`;

interface SingleTarotCardWithFlipAction {
  onClick?: () => void;
}

type cardSize = 'small' | 'medium';

interface SingleTarotCardWithFlipProps extends SingleTarotCardWithFlipAction {
  image: string;
  isCardFlipped?: boolean;
  transitionDelay?: string;
  size?: cardSize;
}

const boxShadow =
  'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px';

const SingleTarotCard = ({
  image,
  isCardFlipped = true,
  transitionDelay,
  onClick,
  size = 'medium'
}: SingleTarotCardWithFlipProps) => {
  return (
    <Box
      onClick={onClick}
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
        src={tarotBack}
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
      />
    </Box>
  );
};

export default SingleTarotCard;
