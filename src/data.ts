export type Data = {
  name: string;
  gender: "male" | "female" | "";
} & (FemaleData | MaleData);

export type FemaleData = {
  hobbies: Hobby[];
};

export type Hobby = {
  name: string;
  rank: number;
};

export type MaleData = {
  sports: string;
};
