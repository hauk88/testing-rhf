export type Data = {
  name: string;
  gender: "male" | "female" | "";
} & (FemaleData | MaleData);

export type FemaleData = {
  hobby: string;
  useShampoo: boolean;
  shampooType?: string;
};

export type MaleData = {
  sports: string;
  useDeoderant: boolean;
  deoderantType?: string;
};
