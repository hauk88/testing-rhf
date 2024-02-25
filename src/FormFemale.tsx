import { useFieldArray, useFormContext } from "react-hook-form";
import { FemaleData } from "./data";

export default function FormFemale() {
  const { register, control } = useFormContext<FemaleData>();

  const hobbies = useFieldArray({ name: "hobbies", control });

  return (
    <>
      <label>Your hobbies?</label>
      {hobbies.fields.map((field, index) => (
        <div key={field.id} style={{ display: "flex" }}>
          <input {...register(`hobbies.${index}.name`)} />
          <input
            {...register(`hobbies.${index}.rank`, { valueAsNumber: true })}
          />
        </div>
      ))}
      <button
        type="button"
        onClick={() => hobbies.append({ name: "", rank: 0 })}
      >
        Add Hobby
      </button>
    </>
  );
}
