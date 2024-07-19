import {
  ILogin,
  ILoginResponse,
  IVerify,
} from "../interfaces/auth/auth.interface";
import { IAuthResponse } from "../interfaces/auth/user.interface";
import { IHttpResponse } from "../interfaces/https/http.interface";
import axios from "../libs/axios";

export const AuthServices = () => {
  const login = async (fields: ILogin) => {
    return await axios.post<IHttpResponse<ILoginResponse>>(
      "/sessions/login",
      fields
    );
  };
  const verify = async (fields: IVerify) => {
    return await axios.post<IHttpResponse<IAuthResponse>>(
      "/sessions/login/verify",
      fields
    );
  };

  return {
    login,
    verify,
  };
};
