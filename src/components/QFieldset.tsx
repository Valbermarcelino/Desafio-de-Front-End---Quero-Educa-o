import { FC, ReactNode } from "react";
import QText from "./QText";

interface QFieldsetProps {
  legend: string;
  children: ReactNode;
}

const QFieldset: FC<QFieldsetProps> = ({ legend, children }) => {
  return (
    <fieldset>
      <QText tag="legend" size="sm" weight="medium" className="mb-3">
        {legend}
      </QText>
      {children}
    </fieldset>
  );
};

export default QFieldset;
