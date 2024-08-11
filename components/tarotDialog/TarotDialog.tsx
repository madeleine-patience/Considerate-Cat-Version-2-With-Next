import {
  Box,
  Typography,
  Dialog,
  CardMedia,
  ClickAwayListener,
  useTheme,
} from "@mui/material";
import { useState } from "react";

interface TarotDialogActions {
  onClick: () => void;
  handleClickAway: () => void;
}

export interface TarotDialogProps extends TarotDialogActions {
  isOpen: boolean;
  card: string;
  suit: string;
  image: string;
  description: string;
  keyWords: string[];
}

const TarotDialog = ({
  isOpen,
  card,
  suit,
  image,
  description,
  keyWords,
  onClick,
  handleClickAway,
}: TarotDialogProps) => {
  const { palette } = useTheme();
  const theme = useTheme();
  return (
    <Dialog open={isOpen}>
      <ClickAwayListener onClickAway={handleClickAway}>
        <Box
          sx={{
            background: palette.greens.light,
            display: "flex",
            p: 6,
            gap: 6,
          }}
        >
          <CardMedia component="img" src={image} sx={{ width: "50%" }} />
          <Box
            sx={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 4,
            }}
          >
            <Typography variant="h4" fontWeight={600}>
              {card}
            </Typography>
            <Typography
              variant="h5"
              fontWeight={400}
              sx={{ fontStyle: "italic" }}
            >
              {suit}
            </Typography>
            <Typography variant="body1">{description}</Typography>
            <Box
              sx={{ width: "100%", display: "flex", flexWrap: "wrap", gap: 2 }}
            >
              {keyWords.map((keyword) => {
                return (
                  <Typography
                    variant="body1"
                    sx={{
                      borderRadius: "64px",
                      background: "pink",
                      width: "fit-content",
                      p: 2,
                    }}
                  >
                    {keyword}
                  </Typography>
                );
              })}
            </Box>
          </Box>
          <Box onClick={onClick}>
            <Typography
              sx={{
                background: palette.pinks.dark,
                color: "white",
                width: "25px",
                height: "25px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "2px solid pink",
              }}
            >
              X
            </Typography>
          </Box>
        </Box>
      </ClickAwayListener>
    </Dialog>
  );
};

export default TarotDialog;
