import { Box, Typography, SxProps, useTheme } from "@mui/material";

interface HomepageWelcomeProps {
  sx?: SxProps;
}

const HomepageWelcome = ({ sx }: HomepageWelcomeProps) => {
  const { palette } = useTheme();

  return (
    <Box
      sx={{
        w: "100%",
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
        <Box
          component="img"
          sx={{
            "&:hover": {
              transform: "rotate(-.04turn)",
            },
          }}
          src="https://bmxnsuildxczrsqnmyje.supabase.co/storage/v1/object/public/considerate%20cat%20assets/No-Background-Phaedra-White.png"
        />
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
