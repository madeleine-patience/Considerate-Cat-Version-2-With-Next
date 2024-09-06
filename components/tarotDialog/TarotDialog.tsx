import {
  Box,
  CardMedia,
  ClickAwayListener,
  Typography,
  Grid,
  Dialog,
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
  const {palette, breakpoints} = useTheme();
  return (
    <Dialog open={isOpen}>
      <ClickAwayListener onClickAway={handleClickAway} sx={{backgroundColor: "transparent"}}>
        <Grid
          container
          sx={{
            backgroundColor: palette.greens.light,
            p: 4
          }}>
          <Grid xs={12} md={6} sx={{
            [breakpoints.up('md')]: {
              minHeight: "500px"
            }
          }}>
            <CardMedia
              component="img"
              src={image}
              sx={{borderRadius: 2}}/>
          </Grid>
          <Grid xs={12} md={6} sx={{
            height: "100%",
            display: "grid",
            flexFlow: "column wrap",
            [breakpoints.up('md')]: {
              minHeight: "500px"
            }
          }}>
            <Box onClick={onClick} sx={{
              justifySelf: "flex-end",
              [breakpoints.down('md')]: {
                order: 1,
                width: "100%",
                textAlign: "center"
              }
            }}>
              <Typography
                sx={{
                  background: palette.pinks.main,
                  color: palette.pinks.contrastLightAAA,
                  cursor: "pointer",
                  p: "0 6px",
                  fontWeight: "700",
                  [breakpoints.down('md')]: {
                    pt: 2,
                    pb: 2,
                    '&::after': {
                      content: '"Close"',
                      pl: 1
                    }
                  }
                }}>
                <span aria-label="close">✕</span>
              </Typography>
            </Box>
            <Box
              sx={{
                p: 4,
                [breakpoints.up('md')]: {
                  pt: 0
                }
              }}>
              <Typography
                variant="h2"
                fontWeight={700}
                fontSize={32}
                sx={{
                  [breakpoints.down('md')]: {
                    pt: 4
                  }
                }}
              >
                {card}
              </Typography>
              <Typography
                variant="h3"
                fontSize={26}
                sx={{
                  fontStyle: "italic",
                  pb: 4
                }}>
                {suit}
              </Typography>
              <Typography>{description}</Typography>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 2,
                  pt: 4,
                  mb: 4
                }}>
                {keyWords.map((keyword) => {
                  return (
                    <Typography
                      key={keyword}
                      fontSize={14}
                      sx={{
                        borderRadius: "64px",
                        background: palette.pinks.main,
                        color: palette.pinks.contrastLightAAA,
                        fontWeight: 600,
                        p: "4px 8px"
                      }}>
                      {keyword}
                    </Typography>
                  );
                })}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ClickAwayListener>
    </Dialog>
  );
};

export default TarotDialog;