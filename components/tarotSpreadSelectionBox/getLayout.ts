import { CSSProperties } from 'react';

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
   * Optional array defining the vertical spacing between each card on hover.
   */
  verticalCardSpacingHovered?: number[];

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
   * Cards will tilt away from the center
   */
  tilt?: number;

  /**
   * Optional value that increases the card tilt progressively.
   * The farther from the center, the more effect tiltDelta will have.
   * Defaults to 0.
   */
  tiltDelta?: number;

  /**
   * Optional tilt angle applied when the cards are hovered.
   * This property determines the amount of card tilt during hover.
   */
  tiltHovered?: number;

  /**
   * Optional value that increases the card tilt progressively on hover.
   * Defaults to 0.
   */
  tiltDeltaHovered?: number;

  /**
   * Optional scale factor applied when the cards are hovered.
   * This property determines how much the cards are scaled during hover.
   */
  scaleHovered?: number;

  /**
   * A generated array of objects, they contain the styles for each card in a layout.
   */
  styles?: Array<{ sx: CSSProperties }>;
}

/**
 * Determines the layout and styles for tarot cards based on input parameters.
 */
export default function getLayout(amountOfCards: number): CardLayout {
  /**
   * Mapping of tarot card indices to their respective image links.
   * This serves to shorten the images arrays in cardLayouts.
   */
  const img = {
    a: '/image/selection-cards/the-two-of-swords.webp',
    b: '/image/selection-cards/the-hermit.webp',
    c: '/image/selection-cards/the-high-priestess.webp',
    d: '/image/selection-cards/the-fool.webp',
    e: '/image/selection-cards/the-empurrer.webp',
    f: '/image/selection-cards/the-hierophant.webp'
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
      verticalCardSpacingHovered: [2, 0, 2],
      scaleHovered: 1.1,
      tiltHovered: 3,
      gridVerticalOffset: '5px',
      gridVerticalOffsetHovered: '15px'
    },
    4: {
      images: [img.b, img.c, img.d, img.e],
      gridTemplateColumns: '31px 48px 50px',
      gridVerticalOffsetHovered: '8px',
      scaleHovered: 1.1,
      tiltHovered: 2
    },
    5: {
      images: [img.b, img.c, img.d, img.e, img.f],
      gridTemplateColumns: '30px 50px 50px 30px',
      verticalCardSpacingHovered: [2, 1, 0, 1, 2],
      scaleHovered: 1.1,
      gridVerticalOffset: '5px',
      gridVerticalOffsetHovered: '15px',
      tiltHovered: 3,
      tiltDeltaHovered: 1.5
    },
    7: {
      images: [img.a, img.b, img.c, img.d, img.e, img.f, img.d],
      gridTemplateColumns: '20px 30px 50px 50px 30px 20px',
      verticalCardSpacing: [33, 35, 30, 0, 30, 35, 33],
      scaleHovered: 1.1,
      gridVerticalOffset: '50px',
      gridVerticalOffsetHovered: '60px',
      tiltHovered: 1.2,
      tiltDeltaHovered: 1.05
    }
  };

  return cardLayouts[amountOfCards];
}
