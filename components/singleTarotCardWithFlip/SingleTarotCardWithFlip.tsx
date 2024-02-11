import { styled } from "@mui/system";
import { ThemeProvider } from "@mui/material/styles";
import { Box, Typography, SxProps } from "@mui/material";

const tarotBack =
  "https://bmxnsuildxczrsqnmyje.supabase.co/storage/v1/object/public/tarotcard/0.jpg";

interface SingleTarotCardWithFlipAction {
  onClick?: () => void;
}

interface SingleTarotCardWithFlipProps extends SingleTarotCardWithFlipAction {
  image: string;
  isCardFlipped: boolean;
  transitionDelay?: string;
}

const boxShadow =
  "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px";

const SingleTarotCard = ({
  image,
  isCardFlipped,
  transitionDelay,
  onClick,
}: SingleTarotCardWithFlipProps) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        transformStyle: "preserve-3d",
        //Set to 0ms to kill the transition on state change between views and avoid transition.
        transition: isCardFlipped ? "transform 800ms" : "transform 0ms",
        transitionDelay: isCardFlipped ? transitionDelay : "",
        cursor: "pointer",
        height: 425,
        width: 250,
        margin: 10,
        transform: isCardFlipped
          ? "perspective(1000px) rotateY(180deg)"
          : "perspective(1000px) rotateY(0deg)",
      }}
    >
      <Box
        width="250px"
        sx={{
          borderRadius: 3,
          boxShadow: { boxShadow },
          backfaceVisibility: "hidden",
        }}
        component="img"
        src={tarotBack}
      />
      <Box
        width="250px"
        sx={{
          borderRadius: 3,
          boxShadow: { boxShadow },
          transformOrigin: "center center",
          width: "100%",
          height: "100%",
          position: "absolute",
          backfaceVisibility: "hidden",
          transform: "rotateY(180deg)",
        }}
        component="img"
        src={image}
      />
    </Box>
  );
};

export default SingleTarotCard;
