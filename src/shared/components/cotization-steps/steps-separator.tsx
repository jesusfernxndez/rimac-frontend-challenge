import styles from "./steps-separator.module.scss";

type StepsSeparatorProps = {
  active?: boolean;
};

function StepsSeparator({ active }: StepsSeparatorProps) {
  const classStepsSeparator = active
    ? `${styles.stepsseparator} ${styles.stepsseparator__active}`
    : styles.stepsseparator;
  return (
    <div className={classStepsSeparator}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default StepsSeparator;
