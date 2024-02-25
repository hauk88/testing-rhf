import { useFormContext } from "react-hook-form";
import { MaleData } from "./data";

export default function FormMale() {
  const { register } = useFormContext<MaleData>();

  return (
    <>
      <label>Favorite sports team</label>
      <input {...register("sports")} />
    </>
  );
}
