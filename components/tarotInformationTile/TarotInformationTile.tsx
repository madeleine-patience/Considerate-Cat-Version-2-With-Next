import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

export interface TarotInformationTileProps {
  name: string;
  description: string;
  image: string;
  keywords: string[];
}

const TarotInformationTile = ({
  name,
  description,
  image,
  keywords
}: TarotInformationTileProps) => {
  const theme = useTheme();
  const { palette } = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: isSmallScreen ? 'column' : 'row',
        alignItems: 'center',
        width: '100%',
        backgroundColor: palette.purples.main,
        p: 4,
        borderRadius: 2,
        gap: 2
      }}
    >
      <Box
        component='img'
        src={image}
        sx={{ height: isSmallScreen ? 300 : 200, px: 2 }}
      />
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          flexDirection: 'column',
          textAlign: isSmallScreen ? 'center' : ''
        }}
      >
        <Typography variant='h4'>{name}</Typography>
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            justifyContent: isSmallScreen ? 'center' : ''
          }}
        >
          {keywords.map((keyword) => {
            return (
              <Typography
                key={keyword}
                sx={{
                  fontWeight: 600,
                  p: 1,
                  borderRadius: 2,
                  background: palette.pinks.main,
                  color: palette.pinks.contrastLightAAA,
                  width: 'fit-content'
                }}
              >
                {keyword}
              </Typography>
            );
          })}
        </Box>
        <Typography>{description}</Typography>
      </Box>
    </Box>
  );
};

export default TarotInformationTile;
