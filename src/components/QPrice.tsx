import { FC, HTMLAttributes } from "react";
import QText from "./QText";
import QBadge from "./QBadge";

interface QPriceProps extends HTMLAttributes<HTMLElement> {
  fullPrice: string;
  offeredPrice: string;
  discount: string;
}

const QPrice: FC<QPriceProps> = ({ fullPrice, offeredPrice, discount }) => {
  return (
    <div className="flex gap-2 items-end">
      <div className="flex flex-col">
        <QText tag="del" color="minor" size="sm">
          {fullPrice}
        </QText>
        <QText tag="ins" size="lg" weight="semibold">
          {offeredPrice}
        </QText>
      </div>
      <QBadge>{discount}</QBadge>
    </div>
  );
};

export default QPrice;
