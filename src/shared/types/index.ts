export type InsuranceUser = {
  name: string;
  lastName: string;
  fullName: string;
  document: number;
  cellphone: number;
  birthDay: string;
  age: number;
};

export type InsurancePlan = {
  name: string;
  price: number;
  description: string[];
  age: number;
};

export type StepInsuranceCotization = 1 | 2;
