import { ReactNode } from "react";
import styles from "./card-type-cotization.module.scss";

type CardTypeCotizationProps = {
  title: string;
  description: string;
  icon: ReactNode;
  selected?: boolean;
  onSelect?: () => void;
};

function SelectedCheck({ selected }: { selected?: boolean }) {
  if (selected) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 0C5.4 0 0 5.4 0 12C0 18.6 5.4 24 12 24C18.6 24 24 18.6 24 12C24 5.4 18.6 0 12 0Z"
          fill="#389E0D"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.1813 7.11293C17.5607 7.434 17.6081 8.00188 17.287 8.38133L10.687 16.1813C10.5215 16.3769 10.2806 16.4927 10.0245 16.4996C9.76844 16.5066 9.52153 16.4042 9.34564 16.2179L5.94564 12.6179C5.60435 12.2566 5.62063 11.687 5.98199 11.3457C6.34336 11.0044 6.91297 11.0207 7.25427 11.382L9.96311 14.2502L15.9129 7.21863C16.234 6.83919 16.8019 6.79187 17.1813 7.11293Z"
          fill="white"
        />
      </svg>
    );
  }
  return (
    <div
      style={{
        width: "24px",
        height: "24px",
        border: "1px solid #A9AFD9",
        borderRadius: "50%",
      }}
    ></div>
  );
}

function CardTypeCotization({
  title,
  description,
  icon,
  selected,
  onSelect,
}: CardTypeCotizationProps) {
  const classCard = selected
    ? `${styles.card} ${styles.card__selected}`
    : styles.card;
  return (
    <div className={classCard} onClick={onSelect}>
      <div className={styles.card__check}>
        <SelectedCheck selected={selected} />
      </div>
      <div className={styles.card__content}>
        <div className={styles.card__content__title}>
          <div className={styles.card__content__icon}>{icon}</div>
          <h5>{title}</h5>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default CardTypeCotization;
