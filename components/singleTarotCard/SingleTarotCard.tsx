import { Box, SxProps } from '@mui/material';

interface SingleTarotCardProps {
  image: string;
  sx?: SxProps;
}

const SingleTarotCard = ({ image, sx }: SingleTarotCardProps) => {
  return (
    <Box
      width='250px'
      sx={{
        borderRadius: 3,
        boxShadow:
          'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;',
        ...sx
      }}
      component='img'
      src={image}
    />
  );
};

export default SingleTarotCard;
