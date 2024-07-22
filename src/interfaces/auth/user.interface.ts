export interface IUser {
  app_2fa_code: string | null;
  app_2fa_type: string | null;
  avatar: string | null;
  created_at: string;
  deleted_at: string | null;
  email: string;
  email_verified_at: string | null;
  id: string;
  is_banned: number;
  is_user_verified: number;
  locale: string;
  ondato_status: number;
  partnerCode: string | null;
  phone: string | null;
  updated_at: string;
}

export interface IAuthResponse {
  token: string;
  userInfo: IUser;
}
