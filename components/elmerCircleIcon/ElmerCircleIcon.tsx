import { styled } from "@mui/system";
import { Box } from "@mui/material";

const ElmerBasic =
  "https://bmxnsuildxczrsqnmyje.supabase.co/storage/v1/object/public/considerate%20cat%20assets/ElmerBasic.png?t=2024-01-27T03%3A25%3A28.802Z";

const ElmerCircleIcon = () => {
  return (
    <Box
      sx={{
        width: 150,
        height: 150,
        background: "#e6dbbe",
        borderRadius: "100%",
        overflow: "hidden",
        position: "relative",
        border: "10px solid #a0b594",
      }}
    >
      <Box
        component="img"
        src={ElmerBasic}
        sx={{
          "@keyframes elmerRise": {
            "0%": {
              top: 110,
            },
            "100%": { top: -4 },
          },
          position: "absolute",
          width: 250,
          overflow: "hidden",
          left: -70,
          top: 110,
          animation: "800ms ease 700ms 1 normal none running elmerRise",
          animationFillMode: "forwards",
        }}
      />
    </Box>
  );
};

export default ElmerCircleIcon;
