import { ReactNode, HTMLAttributes } from "react";

interface Card extends HTMLAttributes<HTMLElement> {
  id: string;
}

interface QListCardProps<T extends Card> {
  cards: T[];
  children: (card: T) => ReactNode;
}

const QListCard = <T extends Card>({
  cards,
  children,
  ...rest
}: QListCardProps<T>) => {
  return (
    <ul
      {...rest}
    >
      {cards.map((card) => (
        <li key={card.id}>{children(card)}</li>
      ))}
    </ul>
  );
};

export default QListCard;
