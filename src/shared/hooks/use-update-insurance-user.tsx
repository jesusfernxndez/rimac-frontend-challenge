import { useCotizationStore } from "@/shared/store";
import { InsuranceUser } from "@/shared/types";

export const useUpdateInsuranceUser = () => {
  const setInsuranceUser = useCotizationStore(
    (state) => state.setInsuranceUser
  );
  const updateInsuranceUser = (insuranceUser?: InsuranceUser) => {
    setInsuranceUser(insuranceUser);
  };
  return { updateInsuranceUser };
};
