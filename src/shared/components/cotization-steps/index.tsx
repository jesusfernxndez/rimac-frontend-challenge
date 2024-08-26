import { useCotizationStore } from "@/shared/store";
import { useMediaQuery } from "@/shared/hooks";
import CotizationStep from "./cotization-step";
import StepsSeparator from "./steps-separator";
import styles from "./index.module.scss";

function CotizationSteps() {
  const { isMobile } = useMediaQuery();
  const step = useCotizationStore((state) => state.stepInsuranceCotization);

  const classes = isMobile
    ? `${styles.cotizationsteps} ${styles.cotizationsteps__nobackground}`
    : styles.cotizationsteps;

  return (
    <div className={classes}>
      {isMobile ? (
        <>
          <div className={styles.back}>
            <button>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_11605_236)">
                  <circle
                    cx="12"
                    cy="12"
                    r="11"
                    stroke="#A9AFD9"
                    strokeWidth="2"
                  />
                  <path
                    d="M12.9715 15.9037L9.06396 11.9999L12.9715 8.09619L14.029 9.15369L11.1865 11.9999L14.029 14.8462L12.9715 15.9037Z"
                    fill="#A9AFD9"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_11605_236">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
          <span className={styles.inline__steps}>PASO {step} DE 2</span>
          <div className={styles.line}></div>
        </>
      ) : (
        <>
          <CotizationStep
            step={1}
            text="Planes y coberturas"
            active={step === 1}
          />
          <StepsSeparator active={step === 1} />
          <CotizationStep step={2} text="Resumen" active={step === 2} />
        </>
      )}
    </div>
  );
}

export default CotizationSteps;
