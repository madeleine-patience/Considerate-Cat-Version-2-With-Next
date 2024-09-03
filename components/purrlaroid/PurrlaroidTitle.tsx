import { Typography } from "@mui/material";

interface PurrlaroidTitleProps {
  catName: string;
}

const PurrlaroidTitle = ({ catName }: PurrlaroidTitleProps) => {
  return (
    <Typography
      sx={{
        fontSize: 40,
        fontWeight: "bold",
        fontStyle: "italic",
        color: "#7d7168",
      }}
    >
      {catName}
    </Typography>
  );
};

export default PurrlaroidTitle;
