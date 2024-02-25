import { useFormContext } from "react-hook-form";
import { FemaleData } from "./data";

export default function FormFemale() {
  const { register, watch } = useFormContext<FemaleData>();

  const useShampoo = watch("useShampoo");
  return (
    <>
      <label>Your hobby?</label>
      <input {...register("hobby")} />
      <label>Do you use shampoo?</label>
      <input type="checkbox" {...register("useShampoo")} />
      {useShampoo ? (
        <>
          <label>Shampoo Type</label>
          <select {...register("shampooType")}>
            <option value="wella">Wella</option>
            <option value="aussi">Aussi</option>
          </select>
        </>
      ) : undefined}
    </>
  );
}
