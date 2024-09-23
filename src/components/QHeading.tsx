import { FC, HTMLAttributes, ReactNode } from "react";
import classNames from "classnames";

interface QHeadingProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const QHeading: FC<QHeadingProps> = ({
  children,
  size = "md",
  tag: TagName,
  ...rest
}) => {
  return (
    <TagName
      {...rest}
      className={classNames([
        "font-medium text-zinc-950",
        {
          sm: "text-lg",
          md: "text-2xl",
          lg: "text-4xl",
        }[size],
      ])}
    >
      {children}
    </TagName>
  );
};

export default QHeading;
