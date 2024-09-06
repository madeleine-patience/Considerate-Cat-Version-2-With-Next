import {
  Box,
  CardMedia,
  ClickAwayListener,
  Dialog,
  Typography,
  useTheme,
} from "@mui/material";

interface TarotDialogActions {
  onClick: () => void;
  handleClickAway: () => void;
}

export interface TarotDialogProps extends TarotDialogActions {
  isOpen: boolean;
  card: string;
  suit: string;
  image: string;
  description: string;
  keyWords: string[];
}

const TarotDialog = ({
  isOpen,
  card,
  suit,
  image,
  description,
  keyWords,
  onClick,
  handleClickAway,
}: TarotDialogProps) => {
  const { palette, breakpoints } = useTheme();
  return (
    <Dialog open={isOpen}>
      <ClickAwayListener onClickAway={handleClickAway}>
        <Box
          sx={{
              background: palette.greens.light,
              display: "flex",
              p: 4,
              [breakpoints.down('md')]: {
                  display: "block",
                  textAlign: "center"
              }
          }}>
          <CardMedia
              component="img"
              src={image}
              sx={
              {
                  objectFit: "contain",
                  objectPosition: "top",
                  maxHeight: "500px",
                  [breakpoints.down('md')]: {
                      maxHeight: "300px",
                  }
              }
          }/>
          <Box
            sx={{
                pl: 4,
                display: "flex",
                flexFlow: "column wrap",
                justifyContent: "center",
                width: "100%",
          }}>
            <Typography
                variant="h2"
                fontWeight={700}
                sx={{
                    fontSize: 32
            }}>
              {card}
            </Typography>
            <Typography
              variant="h3"
              sx={{
                  fontStyle: "italic",
                  pb: 4,
                  fontSize: 26
            }}>
              {suit}
            </Typography>
            <Typography variant="body1">{description}</Typography>
            <Box
              sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 2,
                  pt: 4,
                  [breakpoints.down('md')]: {
                      justifyContent: "center",
                      pb: 4
                  }
            }}>
              {keyWords.map((keyword) => {
                return (
                  <Typography
                    key={keyword}
                    variant="body1"
                    sx={{
                        borderRadius: "64px",
                        background: palette.pinks.main,
                        p: "4px 8px",
                        fontSize: "14px",
                        fontWeight: 500
                  }}>
                    {keyword}
                  </Typography>
                );
              })}
            </Box>
          </Box>
          <Box onClick={onClick}>
            <Typography
              sx={{
                  background: palette.pinks.main,
                  color: "#FF2222",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  p: "0 6px"
              }}>
                <span aria-label="close">✕</span>
            </Typography>
          </Box>
        </Box>
      </ClickAwayListener>
    </Dialog>
  );
};

export default TarotDialog;