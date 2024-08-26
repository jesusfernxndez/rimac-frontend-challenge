import { useCotizationStore } from "@/shared/store";
import styles from "./index.module.scss";
import {
  useUpdateInsuranceUser,
  useUpdateStepInsuranceCotization,
} from "@/shared/hooks";

function IconUser() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M20.1463 13.7647H18.2309C16.1102 13.7647 14.4 15.4756 14.4 17.5972V22H20.1691C22.2898 22 24 20.2891 24 18.1675V17.62C24 15.4756 22.267 13.7647 20.1463 13.7647Z"
        fill="#141938"
      />
      <path
        d="M18.6 12.5882C20.2569 12.5882 21.6 11.2714 21.6 9.64706C21.6 8.02269 20.2569 6.70588 18.6 6.70588C16.9431 6.70588 15.6 8.02269 15.6 9.64706C15.6 11.2714 16.9431 12.5882 18.6 12.5882Z"
        fill="#141938"
      />
      <path
        d="M7.8 10.2353C10.1196 10.2353 12 8.39176 12 6.11765C12 3.84353 10.1196 2 7.8 2C5.4804 2 3.6 3.84353 3.6 6.11765C3.6 8.39176 5.4804 10.2353 7.8 10.2353Z"
        fill="#141938"
      />
      <path
        d="M14.4 13.3483C13.6788 12.8789 12.8134 12.5882 11.8758 12.5882H4.32721C1.94725 12.5882 0 14.399 0 16.6123V18.2442C0 20.3233 1.803 22 4.03873 22H12.1402V17.6853C12.1402 15.9416 13.0297 14.3767 14.4 13.3483Z"
        fill="#141938"
      />
    </svg>
  );
}

function Resumen() {
  const insuranceUser = useCotizationStore((state) => state.insuranceUser);
  const insurancePlan = useCotizationStore((state) => state.insurancePlan);
  const { updateStepInsuranceCotization } = useUpdateStepInsuranceCotization();
  const { updateInsuranceUser } = useUpdateInsuranceUser();
  const onBack = () => {
    updateStepInsuranceCotization(undefined);
    updateInsuranceUser(undefined);
  };
  return (
    <main className={styles.resumenview}>
      <div className={styles.resumenview__back}>
        <button onClick={onBack}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <circle
              cx="10"
              cy="10"
              r="9"
              transform="rotate(90 10 10)"
              stroke="#4F4FFF"
              strokeWidth="2"
            />
            <path
              d="M7.55293 9.99995L10.8092 6.74683L11.6904 7.62808L9.32168 9.99995L11.6904 12.3718L10.8092 13.2531L7.55293 9.99995Z"
              fill="#4F4FFF"
            />
          </svg>
          <span>Volver</span>
        </button>
      </div>
      <div className={styles.resumenview__text}>
        <h1>Resumen del seguro</h1>
      </div>
      <div className={styles.resumenview__card}>
        <div className={styles.resumenview__card__header}>
          <span>PRECIOS CALCULADOS PARA:</span>
          <h5>
            <IconUser />
            {insuranceUser?.fullName}
          </h5>
        </div>
        <div className={styles.resumenview__card__block}>
          <h5>Responsable de pago</h5>
          <span>DNI: {insuranceUser?.document}</span>
          <span>Celular: {insuranceUser?.cellphone}</span>
        </div>
        <div className={styles.resumenview__card__block}>
          <h5>Plan elegido</h5>
          <span>{insurancePlan?.name}</span>
          <span>Costo del Plan: ${insurancePlan?.price} al mes</span>
        </div>
      </div>
    </main>
  );
}

export default Resumen;
