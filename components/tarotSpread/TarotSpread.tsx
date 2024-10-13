import { ReactElement } from 'react';
import SingleTarotCard from '../singleTarotCard/SingleTarotCard';
import { CardLayout } from '../tarotSpreadSelectionBox/getLayout';

export interface TarotSpreadProps {
  amountOfCards: number;
  cardLayout: CardLayout;
}

function TarotSpread({
  amountOfCards,
  cardLayout
}: TarotSpreadProps): ReactElement {
  return (
    <>
      {Array.from({ length: amountOfCards }).map(
        (_: null, i: number): ReactElement => {
          const img = cardLayout.images[i];
          const { sx } = cardLayout.styles[i];

          return (
            <SingleTarotCard
              key={`single-tarot-card-${i}`}
              image={img}
              sx={sx}
            />
          );
        }
      )}
    </>
  );
}

export default TarotSpread;
