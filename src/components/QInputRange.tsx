import { FC, InputHTMLAttributes } from "react";
import QText from "./QText";

interface QInputRangeProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const QInputRange: FC<QInputRangeProps> = ({ label, ...rest }) => {
  return (
    <>
      <QText tag="label" weight="light">
        {label}
      </QText>
      <input {...rest} type="range" className="w-full mt-3 cursor-col-resize" />
    </>
  );
};

export default QInputRange;
