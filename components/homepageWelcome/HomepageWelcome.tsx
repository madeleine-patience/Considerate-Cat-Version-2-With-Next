import { Box, Typography, SxProps, useTheme, keyframes } from "@mui/material";
import { ChubbyStar, CompactGlitter, Glitter } from "../../SVGs/GlitterSvg";

interface HomepageWelcomeProps {
  sx?: SxProps;
}

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    opacity: 0;
  },
  50% {
    transform: rotate(50deg);
    opacity: 1;
  },
  100% {
    transform: rotate(75deg);
    opacity: 0;
  }
`;

const HomepageWelcome = ({ sx }: HomepageWelcomeProps) => {
  const { palette } = useTheme();

  return (
    <Box
      sx={{
        w: "max-content",
        p: 4,
        borderRadius: 3,
        boxShadow:
          "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;",
        backgroundColor: "pink",

        ...sx,
      }}
    >
      <Typography
        variant="h2"
        fontWeight="bold"
        fontStyle="italic"
        color={palette.primary.dark}
        textAlign="center"
        sx={{ textShadow: " 3px 3px purple" }}
      >
        Welcome to Considerate Cat!
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "alignItems",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ position: "relative" }}>
          <Box
            component="img"
            sx={{
              "&:hover": {
                transform: "rotate(-.04turn)",
              },
            }}
            src="https://bmxnsuildxczrsqnmyje.supabase.co/storage/v1/object/public/considerate%20cat%20assets/No-Background-Phaedra-White.png"
          />
          <ChubbyStar
            sx={{
              opacity: 1,
              transform: "rotate(10deg)",
              position: "absolute",
              animation: `${rotateAnimation} 4s 1 linear`,
            }}
            fillColor="white"
          />
          <ChubbyStar
            sx={{
              top: 100,
              right: 20,
              opacity: 1,
              transform: "rotate(10deg)",
              position: "absolute",
              animation: `${rotateAnimation} 4s 1 linear`,
            }}
            fillColor="white"
          />
          <ChubbyStar
            sx={{
              top: 200,
              right: 200,
              opacity: 1,
              transform: "rotate(10deg)",
              position: "absolute",
              animation: `${rotateAnimation} 4s 1 linear`,
            }}
            fillColor="white"
          />
        </Box>
        <Typography variant="h6">
          Considerate Cat is a tarot deck that was published in 2018, brought to
          life by a community of folks on Kickstarter. Since then, the deck has
          been brought into many inspiring people's homes, featuring stories of
          rescue cats from across the world. Now, we are bringing the deck to
          life online! Here, you can have your cards read, learn about the cats
          that inspired the deck, and dive deeper into the artwork.
        </Typography>
      </Box>
    </Box>
  );
};

export default HomepageWelcome;
