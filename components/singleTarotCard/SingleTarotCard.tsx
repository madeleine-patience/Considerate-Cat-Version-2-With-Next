import { Box, SxProps } from '@mui/material';
import Image from 'next/image';

interface SingleTarotCardProps {
  image: string;
  altText?: string;
  sx?: SxProps;
}

const SingleTarotCard = ({ image, altText, sx }: SingleTarotCardProps) => {
  return (
    <Box
      sx={{
        width: '250px',
        borderRadius: 3,
        overflow: 'hidden',
        boxShadow:
          'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;',
        '& img': {
          display: 'block'
        },
        ...sx
      }}
    >
      <Image
        src={image}
        alt={altText || ''}
        width={250}
        height={350}
        style={{
          width: '100%',
          height: 'auto'
        }}
      />
    </Box>
  );
};

export default SingleTarotCard;
