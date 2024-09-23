import { FC } from "react";
import QText from "./QText";
import QIconStar from "./QIconStar";

interface QBadgeProps {
  rating: number;
}

const QRating: FC<QBadgeProps> = ({ rating }) => {
  return (
    <div className="flex items-center gap-2">
      <QText tag="span">{rating}</QText>
      <div className="flex items-center space-x-1 text-yellow-500">
        <QIconStar />
        <QIconStar />
        <QIconStar />
        <QIconStar />
        <QIconStar half />
      </div>
    </div>
  );
};

export default QRating;
