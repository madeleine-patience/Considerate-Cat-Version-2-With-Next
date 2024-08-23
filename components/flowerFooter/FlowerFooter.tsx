import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import {
  Typography,
  Box,
  SxProps,
  useMediaQuery,
  useTheme,
} from "@mui/material";
const catFooterImage =
  "https://bmxnsuildxczrsqnmyje.supabase.co/storage/v1/object/public/considerate%20cat%20assets/catNamedShoe.png";

interface flowerFooterProps {
  sx?: SxProps;
}

const FlowerFooter = ({ sx }: flowerFooterProps) => {
  const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        height: isSmallScreen ? "100vh" : "400px",
        background: "linear-gradient(transparent, #a0b594)",
        ...sx,
        display: "flex",
      }}
    >
      <Box
        sx={{
          width: "100%",
          backgroundImage: isSmallScreen
            ? ""
            : `url("https://bmxnsuildxczrsqnmyje.supabase.co/storage/v1/object/public/considerate%20cat%20assets/tulipFooter.png")`,
          backgroundRepeat: "repeat",
          backgroundSize: "contain",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              background: "rgba(177, 210, 175, 0.8)",
              display: "flex",
              alignItems: "center",
              p: 10,
              borderRadius: 5,
              borderBottomRightRadius: isSmallScreen ? 0 : 5,
              borderBottomLeftRadius: isSmallScreen ? 0 : 5,
              gap: 5,
              flexDirection: isSmallScreen ? "column" : "row",
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
                sx={{ width: 300, position: "relative", top: 10, right: 8 }}
                src={catFooterImage}
              />
            </Box>
            <Box
              sx={{
                maxWidth: "600px",
                p: 10,
                gap: 4,
                background: "#9C6E4F",
                borderRadius: 5,
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <Typography variant="h6" fontWeight="600">
                Considerate Cat is purrrrrently under construction. Hold onto
                your whiskers while we work our
                <b style={{ color: "yellow" }}>
                  <i> ✨ magic! </i>
                </b>
              </Typography>

              <Box sx={{ display: "flex", gap: "16px" }}>
                <InstagramIcon sx={{ color: "white", fontSize: "56px" }} />
                <EmailIcon sx={{ color: "white", fontSize: "56px" }} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FlowerFooter;
