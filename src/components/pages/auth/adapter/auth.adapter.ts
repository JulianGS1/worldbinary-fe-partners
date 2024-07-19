import { FieldValues } from "react-hook-form";
import { ILogin, IVerify } from "../../../../interfaces/auth/auth.interface";

export const loginAdapter = (data: FieldValues): ILogin => {
  return {
    email: data["email"],
    password: data["password"],
  };
};

export const verifyAdapter = (data: FieldValues, hash: string): IVerify => {
  return {
    code: data["code"],
    hash,
  };
};
