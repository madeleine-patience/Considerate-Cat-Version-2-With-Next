import { Typography, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import SingleTarotCard from "../singleTarotCard/SingleTarotCard";
import { useContext } from "react";
import { TarotDeckContext } from "../../context/TarotDeckContext";
import { styled } from "@mui/system";

interface TarotSpreadProps {
  //   title: string;
  amountOfCards?: number;
  //   backgroundColor: string;
  //   image1: string;
  //   image2?: string;
  //   image3?: string;
  //   image4?: string;
  //   image5?: string;
  //   description: string;
}

const TarotSpreadBox = ({
  amountOfCards = 3,
}: //   title,
//   backgroundColor,
//   image1,
//   image2,
//   image3,
//   image4,
//   image5,
//   description,
TarotSpreadProps) => {
  const tarotDeckData = useContext(TarotDeckContext);
  const { palette } = useTheme();

  const CardContainer = styled(Box)({
    "&:hover > *": {
      transition: "transform .5s ease-in-out",
    },

    "&:hover > *:nth-child(1)": {
      transform: " rotate(3deg) scale(1.2) translate(0px, -10px) ",
    },
    "&:hover > *:nth-child(2)": {
      transform: " rotate(-3deg) scale(1.2) translate(0px, -10px) ",
    },
    "&:hover > *:nth-child(3)": {
      transform: " rotate(3deg) scale(1.2) translate(0px, -10px) ",
    },

    "&:hover > *:nth-child(4)": {
      transform: " rotate(-3deg) scale(1.2) translate(0px, -10px) ",
    },

    "&:hover > *:nth-child(5)": {
      transform: " rotate(3deg) scale(1.2) translate(0px, -10px) ",
    },
  });

  //   const StyledTarotCard = styled("img")({
  //     top: 25,
  //     boxShadow:
  //       "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
  //     borderRadius: 10,
  //     transition: "transform .4s ease-in-out",
  //     border: "4px white solid",
  //     width: 100,
  //   });
  return (
    <Box>
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
        >
          {/* {title} */}
        </Typography>
        <Box
          position="relative"
          width={300}
          height={300}
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
        >
          {/* left card */}
          {tarotDeckData.length > 0 && (
            <Box>
              <SingleTarotCard
                image={tarotDeckData[3].image_link}
                sx={{
                  position: "relative",
                  left: "10px",
                  width: "100px",
                  zIndex: "1",
                  "&:hover": {
                    transition: "transform .5s ease-in-out",
                    transform:
                      " rotate(3deg) scale(1.2) translate(0px, -10px) ",
                  },
                }}
              />
              {/* middle card */}
              {amountOfCards > 2 && (
                <SingleTarotCard
                  image={tarotDeckData[1].image_link}
                  sx={{
                    position: "relative",
                    width: "100px",
                    zIndex: "2",
                    "&:hover": {
                      transition: "transform .5s ease-in-out",
                      transform: "  scale(1.2) translate(0px, -10px) ",
                    },
                  }}
                />
              )}
              {amountOfCards > 2 && (
                <SingleTarotCard
                  image={tarotDeckData[5].image_link}
                  sx={{
                    position: "relative",
                    width: "100px",
                    right: "10px",
                    "&:hover": {
                      transition: "transform .5s ease-in-out",
                      transform:
                        " rotate(3deg) scale(1.2) translate(0px, -10px) ",
                    },
                  }}
                />
              )}
              {amountOfCards > 4 && (
                <SingleTarotCard
                  image={tarotDeckData[20].image_link}
                  sx={{
                    position: "absolute",
                    right: "170px",
                    width: "100px",
                    "&:hover": {
                      transition: "transform .5s ease-in-out",
                      transform:
                        " rotate(3deg) scale(1.2) translate(0px, -10px) ",
                    },
                  }}
                />
              )}
              {amountOfCards > 4 && (
                <SingleTarotCard
                  image={tarotDeckData[27].image_link}
                  sx={{
                    position: "absolute",
                    right: "24px",
                    width: "100px",
                    "&:hover": {
                      transition: "transform .5s ease-in-out",
                      transform:
                        " rotate(3deg) scale(1.2) translate(0px, -10px) ",
                    },
                  }}
                />
              )}
            </Box>
          )}
          {/* {amountOfCards > 2 && (
            <StyledTarotCard
              style={{ position: "absolute", right: "75px", zIndex: 1 }}
              src={image3}
            />
          )}
          {amountOfCards > 4 && (
            <StyledTarotCard
              style={{ position: "absolute", right: "170px" }}
              src={image4}
            />
          )}
          {amountOfCards > 4 && (
            <StyledTarotCard
              style={{ position: "absolute", right: "24px" }}
              src={image5}
            />
          )} */}
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
          Vibe Check
        </Typography>
        <Typography
          variant="h6"
          textAlign="center"
          fontSize="bold"
          fontWeight={600}
          color={palette.primary.dark}
        >
          Testing 123
        </Typography>
      </Box>
    </Box>
  );
};

export default TarotSpreadBox;

// marble_wraith: Also worth noting, be careful about which properties you animate on. Stick to Translate, scale, rotate, and opacity. Because those are the ones that can be GPU accelerated.
