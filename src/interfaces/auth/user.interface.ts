export interface IUser {
  id: string;
  email: string;
  username: string;
  email_verified_at: string;
  phone: string | null;
  avatar: string | null;
  created_at: string;
  updated_at: string;
}

export interface IAuthResponse {
  token: string;
  user: IUser;
}
