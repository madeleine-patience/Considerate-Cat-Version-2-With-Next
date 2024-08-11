import { Box, Typography, useTheme } from "@mui/material";

interface GenericButtonAction {
  onClick: () => void;
}

interface GenericButtonProps extends GenericButtonAction {
  width?: number;
  buttonLabel: string;
}

const GenericButton = ({ buttonLabel, onClick, width }: GenericButtonProps) => {
  const { palette } = useTheme();

  return (
    <Box
      sx={{
        px: 2,
        py: 1,
        borderRadius: 2,
        cursor: "pointer",
        textAlign: "center",
        width: width ? `${width}px` : "fit-Content",
        // border: `2px solid ${palette.pinks.dark}`,
        // boxShadow: `3px 3px 0px 3px ${palette.pinks.dark}`,
        "&:hover": {
          // backgroundColor: palette.pinks.light,
        },
        "&:active": {
          // backgroundColor: palette.pinks.dark,
        },
      }}
      onClick={onClick}
    >
      <Typography variant="button">{buttonLabel}</Typography>
    </Box>
  );
};

export default GenericButton;
