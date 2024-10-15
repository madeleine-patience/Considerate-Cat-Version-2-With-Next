import TarotSpreadSelectionBox, {
  TarotSpreadSelectionProps
} from '../tarotSpreadSelectionBox/TarotSpreadSelectionBox';
import { Box } from '@mui/material';

interface TarotSpreadListProps {
  data: TarotSpreadSelectionProps[];
}

export function TarotSpreadSelectionBoxList({ data }: TarotSpreadListProps) {
  return (
    <Box display='flex' flexWrap='wrap' justifyContent='center' gap={8} p={8}>
      {data.map((box, i) => {
        const { onClick, title, amountOfCards, description } = box;

        return (
          <TarotSpreadSelectionBox
            key={`tarotSpreadSelectionBox-${title}`}
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
