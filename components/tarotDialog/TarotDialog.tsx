import {
  Box,
  Typography,
  Dialog,
  CardMedia,
  ClickAwayListener,
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
}

const TarotDialog = ({
  isOpen,
  card,
  suit,
  image,
  description,
  onClick,
  handleClickAway,
}: TarotDialogProps) => {
  return (
    <Dialog open={isOpen}>
      <ClickAwayListener onClickAway={handleClickAway}>
        <Box>
          <Typography>{card}</Typography>
          <Typography>{suit}</Typography>
          <CardMedia component="img" src={image} />
          <Typography>{description}</Typography>
          <Box onClick={onClick} sx={{ backgroundColor: "green" }}>
            <Typography>X</Typography>
          </Box>
        </Box>
      </ClickAwayListener>
    </Dialog>
  );
};

export default TarotDialog;
