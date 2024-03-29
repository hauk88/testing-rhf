import { useFormContext } from "react-hook-form";
import { Data } from "./data";
import FormMale from "./FormMale";
import FormFemale from "./FormFemale";
import { useEffect } from "react";

export default function FormMain() {
  const { register, watch, setValue } = useFormContext<Data>();

  const gender = watch("gender");

  useEffect(() => {
    // Set default values for subforms.
    if (gender === "female") {
      // This overrides on edit.
      // setValue("hobbies", [{ name: "", rank: 0 }]);
    }
  }, [gender]);
  console.log({ gender });
  return (
    <>
      <label>First Name</label>
      <input {...register("name")} />
      <label>
        <input type="checkbox" {...register("lovesFillingForms")} /> Love
        filling forms?
      </label>

      <label>Gender Selection</label>
      <select {...register("gender")}>
        <option value=""></option>
        <option value="female">female</option>
        <option value="male">male</option>
      </select>
      {gender === "male" ? <FormMale /> : undefined}
      {gender === "female" ? <FormFemale /> : undefined}
      <input type="submit" />
    </>
  );
}
