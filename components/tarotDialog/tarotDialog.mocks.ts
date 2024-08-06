import { TarotDialogProps } from "./TarotDialog";

const defaultTarotCard: TarotDialogProps = {
  card: "Temperance",
  suit: "Major Arcana",
  image:
    "https://bmxnsuildxczrsqnmyje.supabase.co/storage/v1/object/public/tarotcard/15.jpg",
  description: "Something something something",
};

export const tarotDialogMocks = {
  defaultTarotCard,
};
