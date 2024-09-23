import { FC } from "react";
import QHeading from "./QHeading";
import QFieldset from "./QFieldset";
import QInputCheckbox from "./QInputCheckbox";
import QInputRange from "./QInputRange";

const QFormFilterOffer: FC = () => {
  return (
    <form action="#">
      <QHeading tag="h1">Filtros</QHeading>

      <hr className="my-5" />

      <QFieldset legend="Graduação">
        <QInputCheckbox label="Bacharelado" />

        <QInputCheckbox label="Licenciatura" />

        <QInputCheckbox label="Técnologo" />
      </QFieldset>

      <hr className="my-5" />

      <QFieldset legend="Modalidade do curso">
        <QInputCheckbox label="Presencial" />

        <QInputCheckbox label="A distância - EaD" />
      </QFieldset>

      <hr className="my-5" />

      <QFieldset legend="Preço da mensalidade">
        <QInputRange label="R$ 340,00" />
      </QFieldset>

      <hr className="mt-5" />
    </form>
  );
};

export default QFormFilterOffer;
