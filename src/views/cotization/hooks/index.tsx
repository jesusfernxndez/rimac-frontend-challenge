import { useState } from "react";
import { getInsurancePlans } from "../services";

export const useGetInsurancePlans = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  const fetchInsurancePlans = async (age: number) => {
    setLoading(true);
    try {
      const data = await getInsurancePlans();
      const filteredData = data.list.filter((plan) => plan.age <= age);
      return { list: filteredData };
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, fetchInsurancePlans };
};
