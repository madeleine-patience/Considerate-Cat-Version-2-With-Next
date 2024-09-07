import { useEffect, useState } from 'react';
import { CardSuitTypes } from '../types/cardSuitTypes';
import { TarotDeckData } from '../types/tarotDeckData';

const initialTarotCardDescription =
  'There are five suits of cards in the Considerate Cat Tarot deck. Major, Cups, Wands, Pentacles and Swords. While each card means something different from the next, each card has a connection or meaning to the suit of which it belongs.';

export const useTarotCard = (cardData: TarotDeckData[]) => {
  const [tarotCardData, setTarotCardData] = useState([]);
  const [displayTarotCards, setDisplayTarotCards] = useState(false);
  const [displayFilteredData, setDisplayFilteredData] = useState([]);
  const [tarotSuitDescription, setTarotSuitDescription] = useState(
    initialTarotCardDescription
  );

  useEffect(() => {
    if (cardData && cardData.length > 0) {
      setTarotCardData(cardData);
    }
  }, [cardData]);

  const displaySomeCards = (amountOfCardsToDisplay: number) => {
    setDisplayTarotCards(true);
    let shuffledData = [...cardData];
    let currentIndex = shuffledData.length;
    let randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [shuffledData[currentIndex], shuffledData[randomIndex]] = [
        shuffledData[randomIndex],
        shuffledData[currentIndex]
      ];
    }
    setDisplayFilteredData(
      shuffledData.length >= amountOfCardsToDisplay
        ? shuffledData.slice(0, amountOfCardsToDisplay)
        : shuffledData
    );
  };

  // const removeOneCard = () => {
  //   setDisplayTarotCards(true);
  //   const dataMinusOneCard = cardData.slice(10);
  //   return dataMinusOneCard;
  // };

  const displayCardBySuit = (cardSuit: CardSuitTypes) => {
    setDisplayFilteredData(tarotCardData);
    setDisplayTarotCards(true);
    setDisplayFilteredData(
      tarotCardData
        .filter((card) => card.card_suit === cardSuit)
        .sort((a, b) => a.id - b.id)
    );

    if (cardSuit === 'Major') {
      setTarotSuitDescription(
        "The major Arcana cards represent significant life events and spiritual lessons, reflecting powerful archetypal energies and themes that can profoundly impact one's journey of personal growth and self-discovery."
      );
    }
    if (cardSuit === 'Cups') {
      setTarotSuitDescription(
        "The suit of Cups represents emotions, relationships, intuition, and creativity. It signifies matters of the heart, love, compassion, and the exploration of one's feelings and inner world."
      );
    }
    if (cardSuit === 'Pentacles') {
      setTarotSuitDescription(
        'The suit of Pentacles relates to material wealth, abundance, practicality, and the physical realm. It signifies financial matters, career, physical well-being, and the tangible aspects of life.'
      );
    }
    if (cardSuit === 'Swords') {
      setTarotSuitDescription(
        'The suit of Swords represents intellect, thoughts, communication, and challenges. It signifies mental clarity, conflicts, decision-making, and the power of the mind to cut through illusions and gain insight.'
      );
    }

    if (cardSuit === 'Wands') {
      setTarotSuitDescription(
        'The suit of Wands symbolizes energy, ambition, passion, and personal growth. It signifies creativity, inspiration, willpower, and the pursuit of goals, often related to career or personal projects.'
      );
    }
  };

  // Parameters - tarotData (object), a number
  // Return a new array of cards and info randomized without duplicates.
  // Takes in an array of tarot cards and returns 3 random cards.
  //

  return {
    displayTarotCards,
    tarotCardData,
    // removeOneCard,
    displaySomeCards,
    displayCardBySuit,
    displayFilteredData,
    tarotSuitDescription
  };
};
