import { Box, Button, Typography } from "@mui/material";
import React from "react";

interface MagicButtonAction {
  onClick?: () => void;
}

export interface MagicButtonProps extends MagicButtonAction {
  title: string;
  backgroundColor: string;
  textColor: string;
  isAnimated?: boolean;
  width: `${number}px`;
  catImage: string;
}

const SVG = (
  <svg
    width="0"
    height="0"
    xmlns="http://www.w3.org/2000/svg"
    style={{ position: "absolute" }}
  >
    <defs>
      <clipPath id="clipPath">
        <rect x="0" y="0" width="100" height="42" rx="20" ry="20" />
      </clipPath>
    </defs>
  </svg>
);

export const MagicButton = ({
  onClick,
  title,
  backgroundColor,
  textColor,
  width,
  isAnimated,
  catImage,
}: MagicButtonProps) => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        width: "fit-content",
      }}
    >
      {SVG}
      <Box
        component="button"
        sx={{
          p: 1,
          border: `3px solid ${textColor}`,
          backgroundColor: backgroundColor,
          color: textColor,
          fontSize: 16,
          borderRadius: "20px",
          position: "relative",
          zIndex: 1,
          width: width,
          clipPath: "url(#clipPath)",
        }}
        onClick={onClick}
      >
        {title}
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: -140,
          height: "100%",
          width: 50,
          background: "rgba(20, 255, 255, 0.4)",
          transition: "transform .5s linear",
          transform: "skewX(20deg) translateX(0)",
          ":hover": { transform: "skewX(20deg) translateX(400px)" },
        }}
      ></Box>
    </Box>
  );
};
