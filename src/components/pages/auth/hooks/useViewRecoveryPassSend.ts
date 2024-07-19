import { FieldValues, useForm } from "react-hook-form";

export const useViewRecoveryPassSend = () => {
  const recoveryForm = useForm();

  const onSend = (values: FieldValues) => {
    console.log(values);
  };

  return {
    forms: {
      recoveryForm,
      onSend,
    },
  };
};
