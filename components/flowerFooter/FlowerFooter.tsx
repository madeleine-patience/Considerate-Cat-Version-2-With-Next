import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import { Typography, Box, SxProps } from "@mui/material";
const catFooterImage =
  "https://bmxnsuildxczrsqnmyje.supabase.co/storage/v1/object/public/considerate%20cat%20assets/catNamedShoe.png";

interface flowerFooterProps {
  sx?: SxProps;
}

const FlowerFooter = ({ sx }: flowerFooterProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        height: "400px",
        background: "linear-gradient(transparent, #a0b594)",
        ...sx,
      }}
    >
      <Box
        sx={{
          width: "100%",
          backgroundImage: `url("https://bmxnsuildxczrsqnmyje.supabase.co/storage/v1/object/public/considerate%20cat%20assets/tulipFooter.png")`,
          backgroundRepeat: "repeat",
          backgroundSize: "contain",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              background: "rgba(177, 210, 175, 0.8)",
              display: "flex",
              alignItems: "center",
              p: 10,
              borderRadius: 5,
              gap: 5,
            }}
          >
            <Box
              sx={{
                width: 200,
                height: 200,
                borderRadius: "100%",
                background: "#ebdfbe",
                overflow: "hidden",
                border: "20px solid #d1c3d6",
              }}
            >
              <Box
                component="img"
                style={{ width: 350 }}
                src={catFooterImage}
              />
            </Box>
            <Box
              sx={{
                maxWidth: "600px",
                p: 8,
                my: "auto",
                background: "#9C6E4F",
                borderRadius: 5,
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <Typography variant="h6">
                Considerate Cat is purrrrrently under construction. Hold onto
                your whiskers while we work our
                <b style={{ color: "yellow" }}>
                  <i> ✨ magic! </i>
                </b>
              </Typography>

              <Box>
                <InstagramIcon
                  sx={{ color: "white", transform: "scale(2)", pr: 8 }}
                />
                <EmailIcon sx={{ color: "white", transform: "scale(2)" }} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FlowerFooter;
