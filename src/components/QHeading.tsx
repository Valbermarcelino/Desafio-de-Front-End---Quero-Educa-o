import { FC, HTMLAttributes, ReactNode } from "react";
import classNames from "classnames";

interface QHeadingProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  lines?: number; // Prop para limitar número de linhas
  minHeight?: string; // Prop para definir a altura mínima
}

const QHeading: FC<QHeadingProps> = ({
  children,
  size = "md",
  tag: TagName,
  lines = 2, // Limita a 2 linhas por padrão
  minHeight = "48px", // Altura mínima padrão
  ...rest
}) => {
  return (
    <TagName
      {...rest}
      className={classNames(
        "font-medium text-zinc-950",
        {
          sm: "text-lg",
          md: "text-2xl",
          lg: "text-4xl",
        }[size],
        `line-clamp-${lines}`, // Limita o número de linhas do título
        `min-h-[${minHeight}]` // Garante altura mínima para o título
      )}
    >
      {children}
    </TagName>
  );
};

export default QHeading;
