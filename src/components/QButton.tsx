import { FC, ButtonHTMLAttributes, ReactNode } from "react";
import classNames from "classnames";

interface QButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  tag?: "button" | "a";
  variant?: "primary" | "secondary";
}

const QButton: FC<QButtonProps> = ({
  children,
  size = "md",
  tag: TagName = "button",
  variant = "primary",
  className,
  ...rest
}) => {
  return (
    <TagName
      className={classNames([
        className,
        "flex items-center justify-center gap-1",
        "rounded-lg border",
        "duration-300 transition-colors ease-in-out",
        {
          primary: "bg-primary-pure hover:bg-primary-dark text-white",
          secondary: [
            "bg-primary-lightest text-primary-pure",
            "border-primary-light hover:border-primary-pure",
          ],
        }[variant],
        {
          sm: "text-xs px-4 py-2",
          md: "text-sm px-6 py-3",
          lg: "text-base px-8 py-4",
        }[size],
      ])}
      {...rest}
    >
      {children}
    </TagName>
  );
};

export default QButton;
