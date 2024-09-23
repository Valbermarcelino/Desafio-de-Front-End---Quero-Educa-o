import { FC } from "react";
import QHeading from "./QHeading";
import QRating from "./QRating";
import QPrice from "./QPrice";
import QText from "./QText";
import QButton from "./QButton";

interface QCardOfferProps {
  courseName: string;
  rating: number;
  fullPrice: string;
  offeredPrice: string;
  discount: string;
  kind: string;
  level: string;
  iesLogo: string;
  iesName: string;
}

const QCardOffer: FC<QCardOfferProps> = ({
  courseName,
  rating,
  fullPrice,
  offeredPrice,
  discount,
  kind,
  level,
  iesLogo,
  iesName,
}) => {
  return (
    <article className="bg-white p-6 rounded-lg shadow-sm border flex flex-col justify-between items-start gap-3">
      <img src={iesLogo} alt={iesName} className="h-10 object-contain" />
      <QHeading tag="h2" size="sm">
        {courseName}
      </QHeading>
      <QRating rating={rating} />
      <QPrice
        fullPrice={fullPrice}
        offeredPrice={offeredPrice}
        discount={discount}
      />
      <div>
        <QText tag="p">{kind}</QText>
        <QText tag="p" color="minor" size="sm">
          {level}
        </QText>
      </div>
      <QButton tag="a" size="sm" className="w-full">
        Quero esta bolsa
      </QButton>
    </article>
  );
};

export default QCardOffer;
