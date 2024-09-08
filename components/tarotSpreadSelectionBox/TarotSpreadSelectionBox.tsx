import { Typography, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import { useContext, useState } from 'react';
import { TarotDeckContext } from '../../context/TarotDeckContext';
import SingleTarotCard from '../singleTarotCard/SingleTarotCard';

interface TarotSpreadAction {
  onClick: () => void;
}
interface TarotSpreadSpreadSelectionProps extends TarotSpreadAction {
  title: string;
  amountOfCards?: number;
  backgroundColor?: string;
  description: string;
  onClick: () => void;
}

interface CardLayout {
  images: string[];
  gridTemplateColumns: string;
  styles: Array<{ sx: React.CSSProperties }>;
}

const TarotSpreadSelectionBox: React.FC<TarotSpreadSelectionProps> = ({
  amountOfCards,
  title,
  backgroundColor,
  description,
  onClick,
  isCurved
}) => {
  const tarotDeckData = useContext(TarotDeckContext);
  const { palette } = useTheme();
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const SingleTarotCardBaseStyles: React.CSSProperties = {
    border: '4px solid white',
    position: 'relative',
    width: '100px',
    transition: 'transform .2s ease-in'
  };

  const getTransformStyle = (
    index: number,
    centerIndex: number
  ): React.CSSProperties => {
    const transforms = {
      left: 'scale(1.2) rotate(-2deg) translate(0px, -10px)',
      right: 'scale(1.2) rotate(2deg) translate(0px, -10px)',
      center: 'scale(1.2) translate(0px, -10px)'
    };

    if (!isHovered) return { transform: 'none' };

    return {
      transform:
        index < centerIndex
          ? transforms.left
          : index > centerIndex
            ? transforms.right
            : transforms.center
    };
  };

  const img = {
    a: tarotDeckData[51].image_link,
    b: tarotDeckData[10].image_link,
    c: tarotDeckData[3].image_link,
    d: tarotDeckData[1].image_link,
    e: tarotDeckData[5].image_link,
    f: tarotDeckData[6].image_link
  };

  const cardLayouts: Record<number, CardLayout> = {
    1: {
      images: [img.d],
      gridTemplateColumns: 'auto',
      gridHover: 'auto'
    },
    3: {
      images: [img.c, img.d, img.e],
      gridTemplateColumns: '50px 50px 100px',
      gridHover: '80px 80px 100px',
      gridVerticalOffset: '10px',
      verticalCardSpacing: 10
    },
    4: {
      images: [img.b, img.c, img.d, img.e],
      gridTemplateColumns: '50px 50px 50px 100px',
      gridHover: '80px 80px 80px 100px'
    },
    5: {
      images: [img.b, img.c, img.d, img.e, img.f],
      gridTemplateColumns: '25px 30px 30px 25px 100px',
      gridHover: '45px 60px 60px 45px 100px',
      gridVerticalOffset: '20px',
      verticalCardSpacing: 10
    },
    7: {
      images: [img.a, img.b, img.c, img.d, img.e, img.f, img.d],
      gridTemplateColumns: '20px 25px 30px 30px 25px 20px 100px',
      gridHover: '30px 40px 40px 40px 40px 30px 100px',
      gridVerticalOffset: '20px',
      verticalCardSpacing: 100
    }
  };

  const generateStylesForLayout = (
    layout: string[]
  ): Array<{ sx: React.CSSProperties }> => {
    const { images, verticalCardSpacing } = layout;
    const centerIndex = Math.floor(images.length / 2);

    return images.map((_, i) => ({
      sx: {
        ...SingleTarotCardBaseStyles,
        ...getTransformStyle(i, centerIndex),
        zIndex:
          amountOfCards !== 4 ? images.length - Math.abs(centerIndex - i) : 1,
        top: `${Math.abs(centerIndex - i) * verticalCardSpacing || 0}px`
      }
    }));
  };

  const layout = cardLayouts[amountOfCards];
  layout.styles = generateStylesForLayout(layout);

  return (
    <Box
      onClick={onClick}
      sx={{
        width: '320px',
        backgroundColor: palette.secondary.main,
        borderRadius: '20px',
        cursor: 'pointer',
        transition: 'all 0.3s',
        boxShadow: isHovered ? '8' : '2',
        transform: isHovered ? 'scale(1.025) ' : ''
      }}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <Box
        sx={{
          padding: '50px 0',
          borderTopLeftRadius: '20px',
          borderTopRightRadius: '20px',
          backgroundColor: { backgroundColor },
          backgroundImage:
            'linear-gradient(to right bottom, #f2afda, #ffb3c2, #ffbeb0, #f7cba9, #e7d8ae)'
        }}
      >
        <Box
          display='grid'
          justifyContent='center'
          gridTemplateColumns={
            isHovered
              ? cardLayouts[amountOfCards].gridHover
              : cardLayouts[amountOfCards].gridTemplateColumns
          }
          sx={{
            position: 'relative',
            bottom: layout.gridVerticalOffset,
            transition: 'all 0.5s'
          }}
        >
          {Array.from({ length: amountOfCards }).map((_, i) => {
            const img = cardLayouts[amountOfCards].images[i];
            const { sx } = cardLayouts[amountOfCards].styles[i];

            return <SingleTarotCard image={img} sx={sx} />;
          })}
        </Box>
      </Box>
      <Box>
        <Typography
          variant='h3'
          textAlign='center'
          fontSize='30px'
          fontWeight={700}
          color={palette.pinks.darker}
          p={4}
        >
          {title}
        </Typography>
        <Typography
          variant='body2'
          p={4}
          pt={0}
          sx={{
            textAlign: 'center',
            fontSize: '18px',
            color: palette.pinks.contrastLightAAA
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};
export default TarotSpreadSelectionBox;
