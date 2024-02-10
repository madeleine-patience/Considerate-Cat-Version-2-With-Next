import { Box, Typography, useTheme } from "@mui/material";
import ElmerCircleIcon from "../elmerCircleIcon/ElmerCircleIcon";
import HeaderButton from "../headerButton/HeaderButton";

interface GenericButtonAction {}

interface GenericButtonProps extends GenericButtonAction {}

const HompeageHeader = ({}) => {
  const { palette } = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: palette.secondary.dark,
        height: "fitContent",
        p: 8,
      }}
    >
      <Box display="flex" sx={{ textDecoration: "capitalize" }}>
        <HeaderButton label="Home" />
        <HeaderButton label="Card Directory" />
        <HeaderButton label="Tarot Readings" />
        <HeaderButton label="Meet The Cats" />
        <HeaderButton label="Shop" />
      </Box>
      <Typography
        variant="h1"
        fontWeight={600}
        color={palette.primary.dark}
        sx={{ textShadow: " 5px 5px purple", fontStyle: "italic" }}
      >
        Considerate Cat
      </Typography>
    </Box>
  );
};

export default HompeageHeader;
