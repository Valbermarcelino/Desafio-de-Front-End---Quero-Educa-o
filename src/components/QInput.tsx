import { FC, InputHTMLAttributes } from "react";

interface QInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const QInput: FC<QInputProps> = ({ ...rest }) => {
  return (
    <input
      className="border border-zinc-300 w-full p-3 text-sm rounded-lg"
      {...rest}
    />
  );
};

export default QInput;
