import { InputHTMLAttributes } from "react";
import styles from "./styles.module.scss";

interface SelectWithInputProps extends InputHTMLAttributes<HTMLInputElement> {
  selectLabel: string;
  label: string;
}

function SelectWithInput({
  selectLabel,
  label,
  ...props
}: SelectWithInputProps) {
  return (
    <div className={styles.group}>
      <div className={styles.group__select}>
        {selectLabel}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M10 14.8937L3.49377 8.38115L5.25628 6.61865L10 11.3562L14.7438 6.61865L16.5063 8.38115L10 14.8937Z"
            fill="#03050F"
          />
        </svg>
      </div>
      <div className={styles.group__input}>
        <label>{label}</label>
        <input {...props} />
      </div>
    </div>
  );
}

export default SelectWithInput;
