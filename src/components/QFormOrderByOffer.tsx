import { FC } from "react";
import QHeading from "./QHeading";
import QInputRadio from "./QInputRadio";

interface QFormOrderByOfferProps {
  sortCriteria: string;
  onChange: (value: string) => void;
}

const QFormOrderByOffer: FC<QFormOrderByOfferProps> = ({ sortCriteria, onChange }) => {
  return (
    <form action="#">
      <QHeading tag="h2" size="sm" className="mb-2">
        Ordenar
      </QHeading>
      
      <QInputRadio
        label="Cursos de A-Z"
        name="order-by"
        value="name"
        checked={sortCriteria === "name"}
        onChange={() => onChange("name")}
      />
      
      <QInputRadio
        label="Menor preço"
        name="order-by"
        value="price"
        checked={sortCriteria === "price"}
        onChange={() => onChange("price")}
      />
      
      <QInputRadio
        label="Melhor avaliados"
        name="order-by"
        value="rating"
        checked={sortCriteria === "rating"}
        onChange={() => onChange("rating")}
      />
    </form>
  );
};

export default QFormOrderByOffer;
