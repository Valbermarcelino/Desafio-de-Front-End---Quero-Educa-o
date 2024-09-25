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
    <ul className="flex flex-wrap -m-4" {...rest}>
      {cards.map((card) => (
        <li className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4" key={card.id}>
          {children(card)}
        </li>
      ))}
    </ul>
  );
};

export default QListCard;
