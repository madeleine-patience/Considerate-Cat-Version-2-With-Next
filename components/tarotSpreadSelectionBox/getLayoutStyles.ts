import { TarotDeckData } from '../../types/tarotDeckData';
import getLayout, { CardLayout } from './getLayout';

interface Transform {
  index: number;
  centerIndex: number;
  tilt: number;
  tiltHovered: number;
  scaleHovered: number;
}

/**
 * Determines the layout and styles for tarot cards based on input parameters.
 */
export default function getLayoutStyles(
  tarotDeckData: TarotDeckData[],
  amountOfCards: number,
  cardTransitionTime: string,
  isHovered: boolean
) {
  let layout: CardLayout;

  /**
   * Base styles applied to each tarot card.
   */
  const SingleTarotCardBaseStyles: React.CSSProperties = {
    border: '4px solid white',
    position: 'relative',
    width: '100px',
    transition: `transform ${cardTransitionTime} ease-in`
  };

  /**
   * Determines transform styles for a card based on its own position and layout.
   */
  const getTransformStyle = ({
    index,
    centerIndex,
    tilt = 0,
    tiltHovered = 0,
    scaleHovered = 1.0
  }: Transform): React.CSSProperties => {
    let transforms = {
      left: `scale(1) rotate(-${tilt}deg)`,
      right: `scale(1) rotate(${tilt}deg)`,
      center: 'scale(1)'
    };

    if (isHovered) {
      transforms = {
        left: `scale(${scaleHovered}) rotate(-${tiltHovered}deg)`,
        right: `scale(${scaleHovered}) rotate(${tiltHovered}deg)`,
        center: `scale(${scaleHovered})`
      };
    }

    return {
      transform:
        index < centerIndex
          ? transforms.left
          : index > centerIndex
            ? transforms.right
            : transforms.center
    };
  };

  /**
   * Generates styles for each card based on the given layout configuration.
   */
  const generateStylesForLayout = (
    layout: CardLayout
  ): Array<{ sx: React.CSSProperties }> => {
    const {
      images,
      tilt,
      tiltHovered,
      scaleHovered,
      verticalCardSpacing = []
    } = layout;
    const centerIndex = Math.floor(images.length / 2);

    return images.map((_, index) => {
      const distanceFromCenter = Math.abs(centerIndex - index);
      const top = `${distanceFromCenter * (verticalCardSpacing[index] || 0)}px`;
      let zIndex = 1;

      if (images.length % 2 !== 0) {
        zIndex = images.length - distanceFromCenter;
      }

      return {
        sx: {
          ...SingleTarotCardBaseStyles,
          ...getTransformStyle({
            index,
            centerIndex,
            tilt,
            tiltHovered,
            scaleHovered
          } as Transform),
          top,
          zIndex
        }
      };
    });
  };

  /**
   * Get the layout configuration and generate styles based on the number of cards.
   */
  layout = getLayout(tarotDeckData, amountOfCards);
  layout.styles = generateStylesForLayout(layout);

  return layout;
}
