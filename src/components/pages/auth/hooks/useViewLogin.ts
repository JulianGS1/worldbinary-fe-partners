import { AxiosError } from "axios";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useAuth } from "../../../../context/auth/useAuth";
import { IErrorResponse } from "../../../../interfaces/auth/auth.interface";
import { AuthServices } from "../../../../services/auth.service";
import { loginAdapter, verifyAdapter } from "../adapter/auth.adapter";

const authServices = AuthServices();

export const useViewLogin = () => {
  const { login } = useAuth();
  const loginForm = useForm();
  const [hash, setHash] = useState<string | null>(null);
  const [codeSend, setCodeSend] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );
  const [passwordType, setPasswordType] = useState<"text" | "password">(
    "password"
  );

  const togglePassword = () => {
    if (passwordType == "password") {
      setPasswordType("text");
    }
    if (passwordType == "text") {
      setPasswordType("password");
    }
  };

  const loginMutate = useMutation(authServices.login, {
    onSuccess: (response) => {
      setHash(response.data.data.item.hash);
      setCodeSend(true);
    },
    onError: (error: AxiosError<IErrorResponse>) => {
      setErrorMessage(error.response?.data.kindMessage);
    },
  });

  const verifyMutate = useMutation(authServices.verify, {
    onSuccess: (response) => {
      login(response.data.data.item);
    },
    onError: (error: AxiosError<IErrorResponse>) => {
      setErrorMessage(error.response?.data.kindMessage);
    },
  });

  const onSend = (values: FieldValues) => {
    setErrorMessage("");
    if (!codeSend) {
      const data = loginAdapter(values);
      loginMutate.mutate(data);
    }

    if (codeSend && hash) {
      const data = verifyAdapter(values, hash);
      verifyMutate.mutate(data);
    }
  };

  const resetForm = () => {
    setCodeSend(false);
    loginForm.reset();
    setErrorMessage(undefined);
  };

  return {
    forms: {
      loginForm,
      onSend,
      resetForm,
    },
    query: {
      loginMutate,
      verifyMutate,
    },
    states: {
      codeSend,
      errorMessage,
      passwordType,
      togglePassword,
    },
  };
};
