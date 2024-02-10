import { styled } from "@mui/system";
import { ThemeProvider } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

interface PurrlaroidAction {
  onClick?: () => void;
}

interface PurrlaroidProps extends PurrlaroidAction {
  // data: unknown;
  catName: string;
  isAnimated?: boolean;
  width: `${number}px`;
  catImage: string;
}

const Purrlaroid = ({
  // data,
  onClick,
  catName,
  width,
  isAnimated,
  catImage,
}: PurrlaroidProps) => {
  return (
    <Box
      sx={{
        textAlign: "center",
        justifyContent: "center",
        backgroundColor: "lightYellow",
        border: "1px solid lightGrey",
        transform: "rotate(0deg)",
        transition: "1s transform ease",
        "&:hover": {
          transform: isAnimated ? "rotate(3deg)" : "rotate(0)",
        },
      }}
    >
      <Box sx={{}}>
        <Box
          component="img"
          sx={{
            width: width,
            height: width,
            objectFit: "cover",
            transition: "opacity .5s ease-in-out",
            "&:hover": {
              opacity: isAnimated ? 0 : 1,
            },
          }}
          onClick={onClick}
          src={catImage}
        />
        {isAnimated && (
          <Box
            component="img"
            onClick={onClick}
            src={"/Art/Abe.jpg"}
            sx={{
              width: width,
              height: width,
              objectFit: "cover",
              position: "absolute",
              zIndex: -1,
            }}
          />
        )}
        {catName && (
          <Typography
            sx={{
              fontFamily: " 'Homemade Apple', cursive",
              fontSize: 28,
              fontWeight: "bold",
              fontStyle: "italic",
              color: "#7d7168",
            }}
          >
            {catName}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default Purrlaroid;

// marble_wraith: Also worth noting, be careful about which properties you animate on. Stick to Translate, scale, rotate, and opacity. Because those are the ones that can be GPU accelerated.
