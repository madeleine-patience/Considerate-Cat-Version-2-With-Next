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
  console.log(onClick);
  return (
    <Dialog open={isOpen}>
      <Box>
        <Typography>{card}</Typography>
        <Typography>{suit} </Typography>
        <CardMedia component="img" src={image} />
        <Typography> {description}</Typography>
      </Box>
      <Box onClick={onClick} sx={{ backgroundColor: "green" }}>
        <Typography>X</Typography>
      </Box>
    </Dialog>
  );
};

export default TarotDialog;
