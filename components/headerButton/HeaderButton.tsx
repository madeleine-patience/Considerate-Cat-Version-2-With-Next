import { Box, Typography, useTheme } from "@mui/material";
import ElmerCircleIcon from "../elmerCircleIcon/ElmerCircleIcon";

interface HeaderButtonProps {
  label: string;
}

const HeaderButton = ({ label }: HeaderButtonProps) => {
  const { palette } = useTheme();

  return (
    <Box display="flex" width="250px" justifyContent="center">
      <Typography
        variant="h5"
        sx={{
          width: "100%",
          textAlign: "center",
          "&:hover": {
            backgroundColor: "#81a67e",
          },
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

export default HeaderButton;
