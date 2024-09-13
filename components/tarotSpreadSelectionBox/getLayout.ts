import { TarotDeckData } from '../../types/tarotDeckData';

/**
 * Defines the layout and styling properties for a group of tarot cards.
 */
export interface CardLayout {
  images: string[];
  gridTemplateColumns: string;
  gridHover: string;
  verticalCardSpacing?: number[];
  gridVerticalOffset?: string;
  tilt?: number;
  tiltHovered?: number;
  scaleHovered?: number;
  styles?: Array<{ sx: React.CSSProperties }>;
}

/**
 * Determines the layout and styles for tarot cards based on input parameters.
 */
export default function getLayout(
  tarotDeckData: TarotDeckData,
  amountOfCards: number,
  cardTransitionTime: string,
  isHovered: boolean
) {
  let result: CardLayout;

  /**
   * Mapping of tarot card indices to their respective image links.
   * This serves to shorten the images array for each layout.
   */
  const img = {
    a: tarotDeckData[51].image_link,
    b: tarotDeckData[10].image_link,
    c: tarotDeckData[3].image_link,
    d: tarotDeckData[1].image_link,
    e: tarotDeckData[5].image_link,
    f: tarotDeckData[6].image_link
  };

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
  const getTransformStyle = (
    index: number,
    tilt: number = 0,
    centerIndex: number,
    tiltHovered: number = 4,
    scaleHovered: number = 1.0
  ): React.CSSProperties => {
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
    const isOddNumberOfCards = images.length % 2 !== 0;

    return images.map((_, i) => {
      const transformStyle = getTransformStyle(
        i,
        centerIndex,
        tilt,
        tiltHovered,
        scaleHovered
      );

      const distanceFromCenter = Math.abs(centerIndex - i);
      const top = `${distanceFromCenter * (verticalCardSpacing[i] || 0)}px`;

      let zIndex = 1;

      if (isOddNumberOfCards) {
        zIndex = images.length - distanceFromCenter;
      }

      return {
        sx: {
          ...SingleTarotCardBaseStyles,
          ...transformStyle,
          top,
          zIndex
        }
      };
    });
  };

  /**
   * Defines card layouts and images for different cards amounts.
   */
  const cardLayouts: Record<number, CardLayout> = {
    1: {
      images: [img.d],
      gridTemplateColumns: 'auto',
      gridHover: 'auto'
    },
    3: {
      images: [img.c, img.d, img.e],
      gridTemplateColumns: '30px 30px 100px',
      gridHover: '70px 70px 100px',
      gridVerticalOffset: '5px'
    },
    4: {
      images: [img.b, img.c, img.d, img.e],
      gridTemplateColumns: '30px 30px 30px 100px',
      gridHover: '55px 55px 55px 100px'
    },
    5: {
      images: [img.b, img.c, img.d, img.e, img.f],
      gridTemplateColumns: '20px 20px 20px 20px 100px',
      gridHover: '40px 50px 50px 40px 100px',
      verticalCardSpacing: [10, 8, 6, 8, 10],
      gridVerticalOffset: '5px'
    },
    7: {
      images: [img.a, img.b, img.c, img.d, img.e, img.f, img.d],
      gridTemplateColumns: '15px 15px 20px 20px 15px 15px 100px',
      gridHover: '60px 70px 80px 80px 70px 60px 100px',
      verticalCardSpacing: [40, 30, 20, 10, 20, 30, 40],
      gridVerticalOffset: '20px',
      tilt: 4
    }
  };

  /**
   * Get the layout configuration and generate styles based on the number of cards.
   */
  result = cardLayouts[amountOfCards];
  result.styles = generateStylesForLayout(result);

  return result;
}
