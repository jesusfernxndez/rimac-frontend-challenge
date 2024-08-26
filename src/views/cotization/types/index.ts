type InsurancePlanResponse = {
  name: string;
  price: number;
  description: string[];
  age: number;
};

export type GetInsurancePlansResponse = {
  list: InsurancePlanResponse[];
};

export type TypeCotization = 1 | 2;
