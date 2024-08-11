import { Box, SxProps, Typography, useTheme } from "@mui/material";

interface HeaderButtonProps {
  label: string;
  sx?: SxProps;
}

const HeaderButton = ({ label, ...sx }: HeaderButtonProps) => {
  const { palette } = useTheme();

  return (
    <Box
      display="flex"
      width="250px"
      justifyContent="center"
      sx={{ display: "flex", justifyContent: "cetner", ...sx }}
    >
      <Typography
        variant="h5"
        sx={{
          color: palette.pinks.dark,

          width: "100%",
          textAlign: "center",
          "&:hover": {
            color: "white",
            textShadow: `7px 4px 9px ${palette.pinks.dark};`,
          },
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

export default HeaderButton;
