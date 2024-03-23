import { Box, Typography, Dialog, CardMedia } from "@mui/material";
interface TarotDialogActions {
  onClick: () => void;
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
}: TarotDialogProps) => {
  return (
    <Dialog open={isOpen}>
      <Box>
        <Typography>{card}</Typography>
        <Typography>{suit} </Typography>
        <CardMedia component="img" src={image} />
        <Typography> {description}</Typography>
      </Box>
      <Box sx={{ backgroundColor: "green" }}>
        <Typography onClick={onClick}> X </Typography>
      </Box>
    </Dialog>
  );
};

export default TarotDialog;
