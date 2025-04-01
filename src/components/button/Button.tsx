import { SyntheticEvent } from "react";
import clsx from "clsx";

interface Props {
  label: string;
  type?: "submit" | undefined;
  onClick?: (event: SyntheticEvent) => void;
  disableHover?: boolean;
  disabled?: boolean;
  className?: string;
}

const Button = ({
  label,
  type,
  onClick,
  disableHover = false,
  disabled,
  className = "",
}: Props) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={clsx(
      `border-solid rounded-md bg-white p-2 m-4 text-blue-600 text-sm lg:text-lg font-bold ${
        !disableHover && !disabled
          ? "hover:bg-gray-300 active:bg-gray-400 transition-all duration-200"
          : ""
      } ${disabled ? "cursor-not-allowed opacity-50" : ""}`,
      className
    )}
  >
    {label}
  </button>
);

export default Button;
