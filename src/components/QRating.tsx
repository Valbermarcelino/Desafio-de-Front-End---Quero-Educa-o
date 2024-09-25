import { FC } from "react";
import QText from "./QText";

interface QBadgeProps {
  rating: number;
}

const QRating: FC<QBadgeProps> = ({ rating }) => {
  return (
    <div className="flex items-center gap-2">
      <QText tag="span">{rating}</QText>
    </div>
  );
};

export default QRating;
