import { FC, InputHTMLAttributes } from "react";
import QText from "./QText";

interface QInputRadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const QInputRadio: FC<QInputRadioProps> = ({ label, ...rest }) => {
  return (
    <label className="flex items-center text-sm py-2 justify-items-start cursor-pointer">
      <input {...rest} type="radio" />
      <QText tag="span" weight="light" className="ml-2">
        {label}
      </QText>
    </label>
  );
};

export default QInputRadio;
