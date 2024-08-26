import { InsurancePlan } from "@/shared/types";
import { useGetInsurancePlans } from "../hooks";
import CardPlan from "./card-plan";
import styles from "./plans-list.module.scss";
import { useEffect, useState } from "react";
import { TypeCotization } from "../types";
import { useCotizationStore } from "@/shared/store";
import { useUpdateStepInsuranceCotization } from "@/shared/hooks";

type PlansListProps = {
  age: number;
  typeCotization: TypeCotization;
};

function PlansList({ age, typeCotization }: PlansListProps) {
  const [plans, setPlans] = useState<InsurancePlan[]>([]);
  const { fetchInsurancePlans } = useGetInsurancePlans();
  const { updateStepInsuranceCotization } = useUpdateStepInsuranceCotization();
  const setInsurancePlan = useCotizationStore(
    (state) => state.setInsurancePlan
  );

  useEffect(() => {
    fetchInsurancePlans(age).then((data) => setPlans(data ? data.list : []));
  }, []);

  const handleSelectPlan = (plan: InsurancePlan) => {
    setInsurancePlan(plan);
    updateStepInsuranceCotization(2);
  };

  return (
    <div className={styles.list}>
      {plans.map((plan, key) => (
        <CardPlan
          key={key}
          plan={plan}
          discount={typeCotization === 2 ? plan.price * 0.05 : undefined}
          onSelected={handleSelectPlan}
        />
      ))}
    </div>
  );
}

export default PlansList;
