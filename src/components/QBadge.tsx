import { FC, ReactNode } from "react";
import QText from "./QText";

interface QBadgeProps {
  children: ReactNode;
}

const QBadge: FC<QBadgeProps> = ({ children }) => {
  return (
    <QText
      tag="small"
      size="xs"
      weight="semibold"
      className="px-2 py-1 bg-emerald-200 text-emerald-800 rounded leading-none"
    >
      {children}
    </QText>
  );
};

export default QBadge;
