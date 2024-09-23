import { FC } from "react";
import QHeading from "./QHeading";
import QInputRadio from "./QInputRadio";

const QFormOrderByOffer: FC = () => {
  return (
    <form action="#">
      <QHeading
        tag="h2"
        size="sm"
        className="mb-2"
      >
        Ordenar
      </QHeading>
      
      <QInputRadio
        label="Cursos de A-Z"
        name="order-by"
        value="course-name"
        checked
        onChange={ () => {} }
      />
      
      <QInputRadio
        label="Menor preço"
        name="order-by"
        value="price"
        onChange={ () => {} }
      />
      
      <QInputRadio
        label="Melhor avaliados"
        name="order-by"
        value="rating"
        onChange={ () => {} }
      />
    </form>
  );
};

export default QFormOrderByOffer;
