import { useCotizationStore } from "@/shared/store";
import { StepInsuranceCotization } from "@/shared/types";

export const useUpdateStepInsuranceCotization = () => {
  const setStepInsuranceCotization = useCotizationStore(
    (state) => state.setStepInsuranceCotization
  );
  const updateStepInsuranceCotization = (step?: StepInsuranceCotization) => {
    setStepInsuranceCotization(step);
  };
  return { updateStepInsuranceCotization };
};
