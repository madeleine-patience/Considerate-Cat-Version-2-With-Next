import { Box, Typography } from "@mui/material";

interface GenericButtonAction {}

interface HeaderProps extends GenericButtonAction {}

export const LoadingPage = ({}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        background: "pink",
        height: "100vh",
      }}
    >
      <Box
        sx={{ height: "800px" }}
        component="img"
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHZtNnIydmx3YXJ5NDRpbnd4ZWFmMnVmODI5a29mOXIyOTUwbTZhYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/QeXnegIcgtpPlHppFV/source.gif"
      />
      <Typography variant="h2"> Loading . . . </Typography>
    </Box>
  );
};
