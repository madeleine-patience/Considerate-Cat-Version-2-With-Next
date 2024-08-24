import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

export const LoadingPage = ({}) => {
  const theme = useTheme();
  const { palette } = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: palette.pinks.main,
        height: "100vh",
      }}
    >
      <Box
        sx={{ height: isSmallScreen ? "300px" : "800px" }}
        component="img"
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHZtNnIydmx3YXJ5NDRpbnd4ZWFmMnVmODI5a29mOXIyOTUwbTZhYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/QeXnegIcgtpPlHppFV/source.gif"
      />
      <Typography
        variant={isSmallScreen ? "h4" : "h2"}
        sx={{ color: palette.pinks.dark, fontWeight: 600 }}
      >
        Loading . . .
      </Typography>
    </Box>
  );
};
