import Link from "next/link";
import { FC } from "react";

import { ButtonProps } from "./buttonTypes";

const Button: FC<ButtonProps> = ({
  primary,
  secondary,
  tertiary,
  fourthly,
  isMargin,
  href,
  children,
  dynamicStyles,
  type = "link",
  onClick,
}) => {
  const buttonGlobals = primary
    ? "btn-primary"
    : secondary
    ? "btn-secondary"
    : tertiary
    ? "btn-tertiary"
    : fourthly
    ? "btn-fourthly"
    : "";

  const buttonTopMargin = isMargin ? "mt-8" : "";
  return (
    <>
      {type === "link" && (
        <Link
          href={href || ""}
          className={`${buttonGlobals} ${buttonTopMargin} ${dynamicStyles}`}
        >
          {children}
        </Link>
      )}
      {type === "button" && (
        <button
          onClick={onClick}
          className={`${buttonGlobals} ${buttonTopMargin} ${dynamicStyles}`}
        >
          {children}
        </button>
      )}
    </>
  );
};
export default Button;
