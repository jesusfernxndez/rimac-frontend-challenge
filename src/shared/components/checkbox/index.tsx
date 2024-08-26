import { ChangeEvent, useId } from "react";
import styles from "./styles.module.scss";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = ({ label, ...props }: CheckboxProps) => {
  const id = useId();
  return (
    <label htmlFor={id} className={styles.checkbox}>
      <input type="checkbox" id={id} {...props} />
      <span>{label}</span>
    </label>
  );
};

export default Checkbox;
