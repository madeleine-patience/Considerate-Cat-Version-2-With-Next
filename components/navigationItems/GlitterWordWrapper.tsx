import { Box, Link, styled } from "@mui/material";
import HeaderButton from "../headerButton/HeaderButton";
import { ChubbyStar, CompactGlitter, Glitter } from "../../SVGs/GlitterSvg";

interface GlitterWrapperProps {
  title: string;
  link: string;
}

const BoxWithStarAnimation = styled(Box)({
  width: "fit-content",
  position: "relative",
  "&:hover .MuiSvgIcon-root": {
    "@keyframes starAnimation": {
      "0%": {
        opacity: 0,
      },
      "50%": {
        opacity: 1,
        transform: "rotate(30deg) scale(1.2) ",
      },
      "100%": {
        opacity: 0,
        transform: "rotate(60deg) scale(1.5) ",
      },
    },
    animation: "starAnimation 600ms linear  1 normal forwards ",
  },
});

export const GlitterWordWrapper = ({ title, link }: GlitterWrapperProps) => {
  return (
    <BoxWithStarAnimation>
      <Link
        href={link}
        style={{
          textDecoration: "none",
          color: "black",
        }}
      >
        <ChubbyStar
          sx={{
            position: "absolute",
            width: 20,
            opacity: 0,
            top: 5,
          }}
        />
        <ChubbyStar
          sx={{
            position: "absolute",
            width: 20,
            opacity: 0,
            right: 10,
            top: 15,
            transform: "rotate(20deg)",
          }}
        />

        <CompactGlitter
          sx={{
            position: "absolute",
            width: 20,
            opacity: 0,
            bottom: 10,
          }}
        />
        <Glitter
          sx={{
            opacity: 0,
            position: "absolute",
            width: 20,
            right: 1,
            top: -10,
          }}
        />
        <HeaderButton label={title} />
      </Link>
    </BoxWithStarAnimation>
  );
};
