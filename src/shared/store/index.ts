import { create } from "zustand";
import {
  InsurancePlan,
  InsuranceUser,
  StepInsuranceCotization,
} from "@/shared/types";

type CotizationStore = {
  stepInsuranceCotization?: StepInsuranceCotization;
  insuranceUser?: InsuranceUser;
  insurancePlan?: InsurancePlan;
  setStepInsuranceCotization: (
    stepInsuranceCotization?: StepInsuranceCotization
  ) => void;
  setInsuranceUser: (insuranceUser?: InsuranceUser) => void;
  setInsurancePlan: (insurancePlan?: InsurancePlan) => void;
};

export const useCotizationStore = create<CotizationStore>()((set) => ({
  setStepInsuranceCotization: (stepInsuranceCotization) =>
    set({ stepInsuranceCotization }),
  setInsuranceUser: (insuranceUser) => set({ insuranceUser }),
  setInsurancePlan: (insurancePlan) => set({ insurancePlan }),
}));
