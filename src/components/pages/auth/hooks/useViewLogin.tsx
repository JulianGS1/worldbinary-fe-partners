import { FieldValues, useForm } from "react-hook-form";
import { useAuth } from "../../../../context/auth/useAuth";
import { mockAuthResponse } from "../mock/user";

export const useViewLogin = () => {
  const { login } = useAuth();
  const loginForm = useForm();
  const onSubmit = (values: FieldValues) => {
    console.log(values);
    login(mockAuthResponse);
  };

  return {
    forms: {
      loginForm,
      onSubmit,
    },
  };
};
