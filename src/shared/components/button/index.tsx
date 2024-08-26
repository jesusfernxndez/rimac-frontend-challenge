import { MouseEvent, ReactNode } from "react";
import styles from "./styles.module.scss";

interface ButtonProps {
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
}

function Button({
  variant,
  size,
  fullWidth,
  disabled,
  onClick,
  children,
}: ButtonProps) {
  const buttonClassWith = fullWidth
    ? `${styles.button} ${styles.fullWidth}`
    : styles.button;
  const buttonClassSize =
    size === "small"
      ? styles.button__small
      : size === "large"
      ? styles.button__large
      : styles.button__medium;
  const buttonClass =
    variant === "secondary"
      ? `${buttonClassWith} ${styles.button__secondary} ${buttonClassSize}`
      : `${buttonClassWith} ${styles.button__primary} ${buttonClassSize}`;
  return (
    <button className={buttonClass} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
