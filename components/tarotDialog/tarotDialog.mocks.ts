import { TarotDialogProps } from "./TarotDialog";

const defaultTarotCard: TarotDialogProps = {
  card: "Temperance",
  suit: "Major Arcana",
  image: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/tarotcard/15.jpg`,
  description: "Something something something",
  keyWords: [],
  isOpen: true,
  onClick: () => {},
  handleClickAway: () => {},
};

export const tarotDialogMocks = {
  defaultTarotCard,
};
