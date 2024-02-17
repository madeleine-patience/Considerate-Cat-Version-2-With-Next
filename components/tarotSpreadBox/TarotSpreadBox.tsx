import { Typography, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import SingleTarotCard from "../singleTarotCard/SingleTarotCard";
import { useContext, useState } from "react";
import { TarotDeckContext } from "../../context/TarotDeckContext";

interface TarotSpreadAction {
  onClick: () => void;
}
interface TarotSpreadProps extends TarotSpreadAction {
  title: string;
  amountOfCards?: number;
  // backgroundColor: string;
  description: string;
}

const TarotSpreadBox = ({
  amountOfCards,
  title,
  // backgroundColor,
  description,
  onClick,
}: TarotSpreadProps) => {
  const tarotDeckData = useContext(TarotDeckContext);
  const { palette } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Box
      onClick={onClick}
      sx={{ width: "fit-content" }}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <Box
        gap="8px"
        flexDirection="column"
        justifyContent="center"
        width={300}
        height={300}
        position="relative"
        sx={{
          backgroundColor: palette.primary.light,
          borderTopLeftRadius: "10%",
          borderTopRightRadius: "10%",
        }}
      >
        <Typography
          pt="20px"
          fontSize={30}
          color="grey"
          variant="h6"
          textAlign="center"
        ></Typography>
        <Box
          position="relative"
          width={300}
          height={300}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {tarotDeckData.length > 0 && (
            <Box display="flex">
              {amountOfCards > 4 && (
                <SingleTarotCard
                  image={tarotDeckData[10].image_link}
                  sx={{
                    border: "4px solid white",
                    position: "relative",
                    width: "100px",
                    left: "120px",

                    transition: "transform .5s ease-in-out",
                    transform: isHovered
                      ? "scale(1.1) rotate(-2deg) translate(0px, -10px)"
                      : "none",
                  }}
                />
              )}
              {amountOfCards > 2 && (
                <SingleTarotCard
                  image={tarotDeckData[3].image_link}
                  sx={{
                    border: "4px solid white",
                    position: "relative",
                    left: "50px",
                    width: "100px",
                    zIndex: "2",

                    transition: "transform .5s ease-in-out",
                    transform: isHovered
                      ? "scale(1.1) rotate(-2deg) translate(0px, -10px)"
                      : "none",
                  }}
                />
              )}
              {amountOfCards > 0 && (
                <SingleTarotCard
                  image={tarotDeckData[1].image_link}
                  sx={{
                    border: "4px solid white",
                    position: "relative",
                    width: "100px",
                    zIndex: "3",
                    transition: "transform .5s ease-in-out",
                    transform: isHovered
                      ? "scale(1.1) translate(0px, -10px)"
                      : "none",
                  }}
                />
              )}
              {amountOfCards > 2 && (
                <SingleTarotCard
                  image={tarotDeckData[5].image_link}
                  sx={{
                    zIndex: 2,
                    border: "4px solid white",
                    position: "relative",
                    width: "100px",
                    right: "50px",
                    transition: "transform .5s ease-in-out",
                    transform: isHovered
                      ? "scale(1.1) rotate(2deg) translate(0px, -10px)"
                      : "none",
                  }}
                />
              )}
              {amountOfCards > 4 && (
                <SingleTarotCard
                  image={tarotDeckData[6].image_link}
                  sx={{
                    border: "4px solid white",
                    position: "relative",
                    width: "100px",
                    right: "120px",
                    transition: "transform .5s ease-in-out",
                    transform: isHovered
                      ? "scale(1.1) rotate(2deg) translate(0px, -10px)"
                      : "none",
                  }}
                />
              )}
            </Box>
          )}
        </Box>
      </Box>
      <Box
        gap="8px"
        flexDirection="column"
        justifyContent="center"
        width={300}
        height={200}
        position="relative"
        display="flex"
        alignContent="center"
        zIndex={1}
        sx={{
          backgroundColor: palette.secondary.main,
          borderBottomRightRadius: "10%",
          borderBottomLeftRadius: "10%",
        }}
      >
        <Typography
          variant="h3"
          textAlign="center"
          fontSize="bold"
          fontWeight={600}
          color={palette.primary.dark}
        >
          {title}
        </Typography>
        <Typography
          variant="h6"
          textAlign="center"
          fontSize="bold"
          fontWeight={600}
          color={palette.primary.dark}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};
export default TarotSpreadBox;
