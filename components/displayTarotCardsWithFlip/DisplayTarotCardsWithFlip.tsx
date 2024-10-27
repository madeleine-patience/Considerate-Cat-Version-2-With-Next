import { Box } from '@mui/material';
import SingleTarotCardWithFlip from '../../components/singleTarotCardWithFlip/SingleTarotCardWithFlip';
import type { TarotCard } from '../../hooks/fetchTarotDeck';

interface DisplayTarotCardsProps {
  tarotDeck?: TarotCard[];
  isFlipped: boolean;
  onClick: () => void;
}

const DisplayTarotCardsWithFlip = ({
  tarotDeck,
  isFlipped,
  onClick
}: DisplayTarotCardsProps) => {
  const getDelaysArr = (amountOfElements: number) => {
    const pageAnimationTime =
      amountOfElements < 4 ? 1000 : amountOfElements < 6 ? 2000 : 8000;
    const result = [];
    const delta = pageAnimationTime / (amountOfElements - 1);
    let current = 0;

    for (let i = 1; i <= amountOfElements; i++) {
      result.push((current / amountOfElements) * 2).toFixed(3);
      current += delta;
    }

    return result;
  };

  const arrayOfDelays = getDelaysArr(tarotDeck.length);

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 4
      }}
    >
      {tarotDeck.map(({ id, image_link, alt_text }: TarotCard, index) => (
        <Box key={id}>
          <SingleTarotCardWithFlip
            image={image_link}
            altText={alt_text}
            isCardFlipped={isFlipped}
            onClick={onClick}
            transitionDelay={`${arrayOfDelays[index]}ms`}
          />
        </Box>
      ))}
    </Box>
  );
};

export default DisplayTarotCardsWithFlip;
