import { FieldValues, useForm } from "react-hook-form";
import { useAuth } from "../../../../context/auth/useAuth";
import { mockAuthResponse } from "../mock/user";
import { loginAdapter, verifyAdapter } from "../adapter/auth.adapter";
import { AuthServices } from "../../../../services/auth.service";
import { useMutation } from "react-query";
import { useState } from "react";
import { AxiosError } from "axios";

const authServices = AuthServices();

export const useViewLogin = () => {
  const { login } = useAuth();
  const loginForm = useForm();
  const [hash, setHash] = useState<string | null>(null);
  const [codeSend, setCodeSend] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  const loginMutate = useMutation(authServices.login, {
    onSuccess: (nice) => {
      console.log(nice);
      setCodeSend(true);
      setHash(nice.data.hash);
    },
    onError: (error: AxiosError<{ message: string }>) => {
      console.log(error);
      setErrorMessage(error.response?.data.message);
    },
  });

  const verifyMutate = useMutation(authServices.verify, {
    onSuccess: (nice) => {
      console.log(nice);
      login(mockAuthResponse);
    },
    onError: (error: AxiosError<{ message: string }>) => {
      console.log(error);
      setErrorMessage(error.response?.data.message);
    },
  });

  const onSend = (values: FieldValues) => {
    login(mockAuthResponse);
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

  return {
    forms: {
      loginForm,
      onSend,
    },
    query: {
      loginMutate,
      verifyMutate,
    },
    states: {
      codeSend,
      errorMessage,
    },
  };
};
