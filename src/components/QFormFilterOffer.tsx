import { FC } from "react";
import QHeading from "./QHeading";
import QFieldset from "./QFieldset";
import QInputCheckbox from "./QInputCheckbox";
import QInputRange from "./QInputRange";

interface QFormFilterOfferProps {
  filters: {
    level: string[];
    kind: string[];
    priceRange: [number, number];
  };
  onChange: (newFilters: any) => void;
}

const QFormFilterOffer: FC<QFormFilterOfferProps> = ({ filters, onChange }) => {
  const handleLevelChange = (level: string) => {
    const newLevel = filters.level.includes(level)
      ? filters.level.filter((l) => l !== level)
      : [...filters.level, level];
    onChange({ ...filters, level: newLevel });
  };

  const handleKindChange = (kind: string) => {
    const newKind = filters.kind.includes(kind)
      ? filters.kind.filter((k) => k !== kind)
      : [...filters.kind, kind];
    onChange({ ...filters, kind: newKind });
  };

  const handlePriceRangeChange = (newRange: [number, number]) => {
    onChange({ ...filters, priceRange: newRange });
  };

  return (
    <form action="#">
      <QHeading tag="h1">Filtros</QHeading>

      <hr className="my-5" />

      <QFieldset legend="Graduação">
        <QInputCheckbox
          label="Bacharelado"
          checked={filters.level.includes("bacharelado")}
          onChange={() => handleLevelChange("bacharelado")}
        />

        <QInputCheckbox
          label="Licenciatura"
          checked={filters.level.includes("licenciatura")}
          onChange={() => handleLevelChange("licenciatura")}
        />

        <QInputCheckbox
          label="Tecnólogo"
          checked={filters.level.includes("tecnologo")}
          onChange={() => handleLevelChange("tecnologo")}
        />
      </QFieldset>

      <hr className="my-5" />

      <QFieldset legend="Modalidade do curso">
        <QInputCheckbox
          label="Presencial"
          checked={filters.kind.includes("presencial")}
          onChange={() => handleKindChange("presencial")}
        />

        <QInputCheckbox
          label="A distância - EaD"
          checked={filters.kind.includes("ead")}
          onChange={() => handleKindChange("ead")}
        />
      </QFieldset>

      <hr className="my-5" />

      <QFieldset legend="Preço da mensalidade">
        <QInputRange
          label={`R$ 0 - R$ ${filters.priceRange[1]}`}
          min={0}
          max={700}
          value={filters.priceRange}
          onChange={handlePriceRangeChange}
        />
      </QFieldset>

      <hr className="mt-5" />
    </form>
  );
};

export default QFormFilterOffer;
