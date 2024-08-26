import { IconCotizationForMe, IconCotizationOtherPerson } from "@/shared/icons";
import {
  useUpdateInsuranceUser,
  useUpdateStepInsuranceCotization,
} from "@/shared/hooks";
import { useCotizationStore } from "@/shared/store";
import CardTypeCotization from "./components/card-type-cotization";
import styles from "./index.module.scss";
import { useState } from "react";
import PlansList from "./components/plans-list";
import { TypeCotization } from "./types";

function Cotization() {
  const [selectCoti, setSelectCoti] = useState<TypeCotization>();
  const insuranceUser = useCotizationStore((state) => state.insuranceUser);
  const { updateStepInsuranceCotization } = useUpdateStepInsuranceCotization();
  const { updateInsuranceUser } = useUpdateInsuranceUser();
  const onBack = () => {
    updateStepInsuranceCotization(undefined);
    updateInsuranceUser(undefined);
  };
  return (
    <main className={styles.cotizationview}>
      <div className={styles.cotizationview__back}>
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
      <div className={styles.cotizationview__text}>
        <h1>{insuranceUser?.name} ¿Para quién deseas cotizar?</h1>
        <h5>Selecciona la opción que se ajuste más a tus necesidades.</h5>
      </div>
      <div className={styles.cotizationview__forme}>
        <CardTypeCotization
          title="Para mí"
          description="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
          icon={<IconCotizationForMe />}
          selected={selectCoti === 1}
          onSelect={() => setSelectCoti(1)}
        />
      </div>
      <div className={styles.cotizationview__formotherperson}>
        <CardTypeCotization
          title="Para alguien más"
          description="
            Realiza una cotización para uno de tus familiares o cualquier
            persona."
          icon={<IconCotizationOtherPerson />}
          selected={selectCoti === 2}
          onSelect={() => setSelectCoti(2)}
        />
      </div>
      {insuranceUser && selectCoti && (
        <div className={styles.cotizationview__planslist}>
          <PlansList age={insuranceUser.age} typeCotization={selectCoti} />
        </div>
      )}
    </main>
  );
}

export default Cotization;
