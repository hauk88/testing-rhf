import { useFormContext } from "react-hook-form";
import { MaleData } from "./data";

export default function FormMale() {
  const { register, watch } = useFormContext<MaleData>();

  const useDeoderant = watch("useDeoderant");
  return (
    <>
      <label>Favorite sports team</label>
      <input {...register("sports")} />
      <label>Do you use deoderant?</label>
      <input type="checkbox" {...register("useDeoderant")} />
      {useDeoderant ? (
        <>
          <label>Deoderant Type</label>
          <select {...register("deoderantType")}>
            <option value="axe">Axe</option>
            <option value="palmolive">Palmolive</option>
          </select>
        </>
      ) : undefined}
    </>
  );
}
