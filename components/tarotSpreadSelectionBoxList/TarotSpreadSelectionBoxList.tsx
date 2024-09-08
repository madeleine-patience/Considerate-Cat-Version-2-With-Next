import TarotSpreadSelectionBox, {
  TarotSpreadSelectionProps
} from '../tarotSpreadSelectionBox/TarotSpreadSelectionBox';
import { Box } from '@mui/material';

interface TarotSpreadListProps {
  data: TarotSpreadSelectionProps[];
}

export default function TarotSpreadSelectionBoxList({
  data
}: TarotSpreadListProps) {
  return (
    <Box display='flex' flexWrap='wrap' justifyContent='center' gap={10} p={10}>
      {data.map((box, i) => {
        const { onClick, title, amountOfCards, description } = box;

        return (
          <TarotSpreadSelectionBox
            key={`tarotSpreadSelectionBox-${i}`}
            onClick={onClick}
            title={title}
            amountOfCards={amountOfCards}
            description={description}
            zIndex={i}
          />
        );
      })}
    </Box>
  );
}
