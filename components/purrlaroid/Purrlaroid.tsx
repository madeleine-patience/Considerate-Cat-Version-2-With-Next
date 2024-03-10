import { Box, Typography } from "@mui/material";

interface PurrlaroidAction {
  onClick?: () => void;
}

interface PurrlaroidProps extends PurrlaroidAction {
  catName: string;
  isAnimated?: boolean;
  width: `${number}px`;
  catImage: string;
}

const Purrlaroid = ({
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
        backgroundColor: "lightYellow",
        border: "3px solid lightGrey",
        transform: "rotate(0deg)",
        transition: "1s transform ease",
        margin: "auto",
        padding: 4,
        boxShadow: "5px 5px 15px 5px rgba(0,0,0,0.27)        ",
        "&:hover": {
          transform: isAnimated ? "rotate(3deg)" : "rotate(0)",
        },
      }}
    >
      <Box
        component="img"
        sx={{
          width: width,
          height: width,
          objectFit: "cover",
          transition: "opacity .5s ease-in-out",
          // "&:hover": {
          //   opacity: isAnimated ? 0 : 1,
          // },
        }}
        onClick={onClick}
        src={catImage}
      />
      {/* {isAnimated && (
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
      )} */}
      {catName && (
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
      )}
    </Box>
  );
};

export default Purrlaroid;
