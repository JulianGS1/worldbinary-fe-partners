export interface ILogin {
  email: string;
  password: string;
}

export interface IVerify {
  code: string;
  hash: string;
}
