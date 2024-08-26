import styles from "./cotization-step.module.scss";

type CotizationStepProps = {
  step: number;
  text: string;
  active?: boolean;
};

function CotizationStep({ step, text, active }: CotizationStepProps) {
  const classCotizationStep = active
    ? `${styles.cotizationstep} ${styles.cotizationstep__active}`
    : styles.cotizationstep;
  return (
    <div className={classCotizationStep}>
      <div className={styles.cotizationstep__step}>
        <span>{step}</span>
      </div>
      <span className={styles.cotizationstep__text}>{text}</span>
    </div>
  );
}

export default CotizationStep;
