import { Box, SxProps, Typography, useTheme } from "@mui/material";

interface HeaderButtonProps {
  label: string;
  sx: SxProps;
}

const HeaderButton = ({ label, ...sx }: HeaderButtonProps) => {
  const { palette } = useTheme();

  return (
    <Box
      display="flex"
      width="250px"
      justifyContent="center"
      sx={{ display: "flex", width: "250px", justifyContent: "cetner", ...sx }}
    >
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
