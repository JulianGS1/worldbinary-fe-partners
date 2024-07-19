import { ILogin, IVerify } from "../interfaces/auth/auth.interface";
import axios from "../libs/axios";

export const AuthServices = () => {
  const login = async (fields: ILogin) => {
    return await axios.post("/sessions/login", fields);
  };
  const verify = async (fields: IVerify) => {
    return await axios.post("/sessions/login/verify", fields);
  };

  return {
    login,
    verify,
  };
};
