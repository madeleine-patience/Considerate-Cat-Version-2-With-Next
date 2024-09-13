import { TarotDeckData } from '../../types/tarotDeckData';

export interface CardLayout {
  images: string[];
  gridTemplateColumns: string;
  gridHover: string;
  verticalCardSpacing?: number[];
  gridVerticalOffset?: string;
  styles?: Array<{ sx: React.CSSProperties }>;
}

export default function getLayout(
  tarotDeckData: TarotDeckData,
  amountOfCards: number,
  cardTransitionTime: string
) {
  let result: CardLayout;

  const img = {
    a: tarotDeckData[51].image_link,
    b: tarotDeckData[10].image_link,
    c: tarotDeckData[3].image_link,
    d: tarotDeckData[1].image_link,
    e: tarotDeckData[5].image_link,
    f: tarotDeckData[6].image_link
  };

  const SingleTarotCardBaseStyles: React.CSSProperties = {
    border: '4px solid white',
    position: 'relative',
    width: '100px',
    transition: `transform ${cardTransitionTime} ease-in`
  };

  const getTransformStyle = (
    index: number,
    centerIndex: number
  ): React.CSSProperties => {
    const transforms = {
      left: 'scale(1.2) rotate(-2deg) translate(0px, -10px)',
      right: 'scale(1.2) rotate(2deg) translate(0px, -10px)',
      center: 'scale(1.2) translate(0px, -10px)'
    };

    return {
      transform:
        index < centerIndex
          ? transforms.left
          : index > centerIndex
            ? transforms.right
            : transforms.center
    };
  };

  const generateStylesForLayout = (
    layout: CardLayout
  ): Array<{ sx: React.CSSProperties }> => {
    const { images, verticalCardSpacing = [] } = layout;
    const centerIndex = Math.floor(images.length / 2);

    return images.map((_, i) => ({
      sx: {
        ...SingleTarotCardBaseStyles,
        ...getTransformStyle(i, centerIndex),
        top: `${Math.abs(centerIndex - i) * verticalCardSpacing[i] || 0}px`,
        zIndex:
          amountOfCards !== 4 ? images.length - Math.abs(centerIndex - i) : 1
      }
    }));
  };

  const cardLayouts: Record<number, CardLayout> = {
    1: {
      images: [img.d],
      gridTemplateColumns: 'auto',
      gridHover: 'auto'
    },
    3: {
      images: [img.c, img.d, img.e],
      gridTemplateColumns: '50px 50px 100px',
      gridHover: '80px 80px 100px',
      verticalCardSpacing: [5, 10, 5],
      gridVerticalOffset: '10px'
    },
    4: {
      images: [img.b, img.c, img.d, img.e],
      gridTemplateColumns: '50px 50px 50px 100px',
      gridHover: '80px 80px 80px 100px'
    },
    5: {
      images: [img.b, img.c, img.d, img.e, img.f],
      gridTemplateColumns: '25px 30px 30px 25px 100px',
      gridHover: '45px 60px 60px 45px 100px',
      verticalCardSpacing: [10, 8, 6, 8, 10],
      gridVerticalOffset: '20px'
    },
    7: {
      images: [img.a, img.b, img.c, img.d, img.e, img.f, img.d],
      gridTemplateColumns: '20px 25px 30px 30px 25px 20px 100px',
      gridHover: '60px 70px 80px 80px 70px 60px 100px',
      verticalCardSpacing: [10, 10, 10, 10, 10, 10, 10],
      gridVerticalOffset: '40px'
    }
  };

  result = cardLayouts[amountOfCards];
  result.styles = generateStylesForLayout(result);

  return result;
}
