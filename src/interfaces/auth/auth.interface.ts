export interface ILogin {
  email: string;
  password: string;
}

export interface IVerify {
  code: string;
  hash: string;
}

export interface ILoginResponse {
  hash: string;
  "2fa_type": string | null;
}

interface TimeLapse {
  started: string;
  ended: string;
  duration: number;
}

export interface IErrorResponse {
  success: boolean;
  kindMessage: string;
  stack: string;
  httpCode: number;
  timeLapse: TimeLapse;
}

export interface IVerifyErrorResponse {}
