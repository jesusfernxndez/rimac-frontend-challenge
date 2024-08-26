import { useId, type InputHTMLAttributes } from "react";
import styles from "./styles.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

function Input({ label, ...props }: InputProps) {
  const id = props.id || useId();
  return (
    <div className={styles.group}>
      {label && <label htmlFor={id}>{label}</label>}
      <input id={id} {...props} />
    </div>
  );
}

export default Input;
