import { Box, Typography, useTheme } from "@mui/material";

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
            color: "white",
          },
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

export default HeaderButton;
