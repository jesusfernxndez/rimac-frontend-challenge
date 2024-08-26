import { GetInsurancePlansResponse } from "../types";

const ENDPOINT = "https://rimac-front-end-challenge.netlify.app/api/plans.json";

export const getInsurancePlans = async () => {
  const response = await fetch(ENDPOINT);
  const data: GetInsurancePlansResponse = await response.json();
  return data;
};
