import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { Data } from "./data";
import FormMain from "./FormMain";

type FormSetupProps = {
  data: Data | null;
  onSave: (showForm: Data) => void;
};

export default function FormSetup(props: FormSetupProps) {
  const methods = useForm<Data>(
    props.data
      ? { defaultValues: props.data }
      : {
          defaultValues: {
            name: "",
            lovesFillingForms: true,
            gender: "",
          },
        }
  );
  const onSubmit: SubmitHandler<Data> = (data) => {
    props.onSave(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <FormMain />
      </form>
    </FormProvider>
  );
}
