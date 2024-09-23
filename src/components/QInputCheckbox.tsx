import { FC, InputHTMLAttributes } from "react";
import QText from "./QText";

interface QInputCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const QInputCheckbox: FC<QInputCheckboxProps> = ({ label, ...rest }) => {
  return (
    <label className="flex items-center text-sm py-2 justify-items-start cursor-pointer">
      <input type="checkbox" {...rest} />
      <QText tag="span" weight="light" className="ml-2">
        {label}
      </QText>
    </label>
  );
};

export default QInputCheckbox;
