import { Box, Typography, useTheme } from "@mui/material";
import ElmerCircleIcon from "../elmerCircleIcon/ElmerCircleIcon";
import HeaderButton from "../headerButton/HeaderButton";
import Link from "next/link";

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
        backgroundColor: "#a0b594",
        height: "fitContent",
        p: 8,
      }}
    >
      <Box display="flex" sx={{ textDecoration: "capitalize" }}>
        <Link href="./" style={{ textDecoration: "none", color: "black" }}>
          <HeaderButton label="Home" />
        </Link>

        <Link
          href="./CardDirectoryPage"
          style={{ textDecoration: "none", color: "black" }}
        >
          <HeaderButton label="Card Directory" />
        </Link>
        <Link
          href="./TarotReadPage"
          style={{ textDecoration: "none", color: "black" }}
        >
          <HeaderButton label="Tarot Readings" />
        </Link>

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
