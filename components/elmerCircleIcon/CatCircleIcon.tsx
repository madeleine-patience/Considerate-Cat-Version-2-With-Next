import { Box, useTheme } from '@mui/material';

const Elmer = '/image/elmerBasic-transparentBackground.png';
const Daniel = '/image/danielBasic-transparentBackground.png';
const Hubert = '/image/hubertBasic-transparentBackground.png';
const Louie = '/image/louieBasic-transparentBackground.png';

type catIcon = 'elmer' | 'daniel' | 'hubert' | 'louie';

interface Props {
  catType: catIcon;
}

export const CatCircleIcon = ({ catType }: Props) => {
  const { palette } = useTheme();

  const getCat = () => {
    if (catType === 'elmer') {
      return Elmer;
    }
    if (catType === 'daniel') {
      return Daniel;
    }
    if (catType === 'hubert') {
      return Hubert;
    }
    return Louie;
  };

  const getBackgroundColor = () => {
    if (catType === 'elmer') {
      return palette.greens.main;
    }
    if (catType === 'daniel') {
      return palette.yellows.main;
    }
    if (catType === 'hubert') {
      return palette.pinks.main;
    }
    return palette.purples.main;
  };

  const getBorderColor = () => {
    if (catType === 'elmer') {
      return palette.greens.dark;
    }
    if (catType === 'daniel') {
      return palette.yellows.dark;
    }
    if (catType === 'hubert') {
      return palette.pinks.dark;
    }
    return palette.purples.dark;
  };
  return (
    <Box
      sx={{
        width: 150,
        height: 150,
        background: getBackgroundColor(),
        borderRadius: '100%',
        overflow: 'hidden',
        position: 'relative',
        border: `10px solid ${getBorderColor()}`
      }}
    >
      <Box
        component='img'
        src={getCat()}
        sx={{
          '@keyframes elmerRise': {
            '0%': {
              top: 100
            },
            '100%': { top: 0 }
          },
          position: 'absolute',
          width: 250,
          overflow: 'hidden',
          left: -65,
          top: 110,
          animation: '800ms ease 700ms 1 normal none running elmerRise',
          animationFillMode: 'forwards'
        }}
      />
    </Box>
  );
};
