import { FC, ReactNode, AnchorHTMLAttributes } from "react";
import classNames from "classnames";

interface QLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  size?: "xs" | "sm" | "md" | "lg";
}

const QLink: FC<QLinkProps> = ({ children, size = "md", ...rest }) => {
  return (
    <a
      {...rest}
      className={classNames([
        "text-primary-pure hover:text-primary-darkest hover:underline",
        {
          xs: "text-xs",
          sm: "text-sm",
          md: "text-base",
          lg: "text-lg",
        }[size],
      ])}
    >
      {children}
    </a>
  );
};

export default QLink;
