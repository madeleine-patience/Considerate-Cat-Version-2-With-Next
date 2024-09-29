import { TarotDeckData } from '../../types/tarotDeckData';

/**
 * Defines the layout and styling properties for a group of tarot cards.
 */
export interface CardLayout {
  /**
   * Array of image URLs to be used for the tarot cards.
   * Each entry corresponds to a specific card in the layout.
   */
  images: string[];

  /**
   * CSS grid template column definition for arranging the cards.
   * Specifies how the columns should be laid out in the grid.
   *
   * In other words, it is the defined space in between cards in a layout.
   * Since it is the space in between, the length will be one less than amountOfCards.
   */
  gridTemplateColumns?: string;

  /**
   * CSS grid column definition for the hover state of the cards.
   * Specifies how the columns should adjust when the cards are hovered.
   */
  gridHover?: string;

  /**
   * Optional array defining the vertical spacing between each card.
   */
  verticalCardSpacing?: number[];

  /**
   * Optional vertical offset applied to the entire grid layout.
   * This offset shifts the grid vertically relative to its container (from the bottom).
   */
  gridVerticalOffset?: string;

  /**
   * Optional vertical offset applied to the entire grid layout when hovered.
   *
   * Defaults to gridVerticalOffset (doesn't move)
   */
  gridVerticalOffsetHovered?: string;

  /**
   * Optional tilt angle for the cards.
   * This property determines the angle at which the cards are tilted.
   * Cards will tilt to opposite sides
   */
  tilt?: number;

  /**
   * Optional tilt angle applied when the cards are hovered.
   * This property determines the angle at which the cards are tilted during hover.
   */
  tiltHovered?: number;

  /**
   * Optional scale factor applied when the cards are hovered.
   * This property determines how much the cards are scaled during hover.
   */
  scaleHovered?: number;

  /**
   * A generated array of objects, the styles for each card in a layout.
   */
  styles?: Array<{ sx: React.CSSProperties }>;
}

/**
 * Determines the layout and styles for tarot cards based on input parameters.
 */
export default function getLayout(
  tarotDeckData: TarotDeckData,
  amountOfCards: number
): CardLayout {
  /**
   * Mapping of tarot card indices to their respective image links.
   * This serves to shorten the images arrays in cardLayouts.
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
   * Defines card layouts and images for different cards amounts.
   *
   * Make style adjustments to the layout configurations here.
   */
  const cardLayouts: Record<number, CardLayout> = {
    1: {
      images: [img.d],
      scaleHovered: 1.1,
      gridVerticalOffsetHovered: '6px'
    },
    3: {
      images: [img.c, img.d, img.e],
      gridTemplateColumns: '50px 50px',
      gridHover: '50px 50px',
      scaleHovered: 1.1,
      tiltHovered: 5,
      gridVerticalOffset: '5px',
      gridVerticalOffsetHovered: '11px'
    },
    4: {
      images: [img.b, img.c, img.d, img.e],
      gridTemplateColumns: '45px 45px 45px',
      gridVerticalOffsetHovered: '8px',
      scaleHovered: 1.1,
      tiltHovered: 3
    },
    5: {
      images: [img.b, img.c, img.d, img.e, img.f],
      gridTemplateColumns: '30px 50px 50px 30px',
      scaleHovered: 1.1,
      gridVerticalOffset: '5px',
      tiltHovered: 3
    },
    7: {
      images: [img.a, img.b, img.c, img.d, img.e, img.f, img.d],
      gridTemplateColumns: '20px 30px 50px 50px 30px 20px',
      verticalCardSpacing: [26, 23, 12, 0, 12, 23, 26],
      scaleHovered: 1.1,
      gridVerticalOffset: '40px',
      gridVerticalOffsetHovered: '45px',
      tiltHovered: 3
    }
  };

  return cardLayouts[amountOfCards];
}
