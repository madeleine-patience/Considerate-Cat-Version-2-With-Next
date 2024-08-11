import { Box, Typography, useTheme } from "@mui/material";

interface GenericButtonAction {}

interface HeaderProps extends GenericButtonAction {}

export const LoadingPage = ({}) => {
  const { palette } = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        // backgroundColor: palette.pinks.main,
        height: "100vh",
      }}
    >
      <Box
        sx={{ height: "800px" }}
        component="img"
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHZtNnIydmx3YXJ5NDRpbnd4ZWFmMnVmODI5a29mOXIyOTUwbTZhYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/QeXnegIcgtpPlHppFV/source.gif"
      />
      <Typography
        variant="h2"
        // sx={{ color: palette.pinks.dark, fontWeight: 600 }}
      >
        {" "}
        Loading . . .{" "}
      </Typography>
    </Box>
  );
};
