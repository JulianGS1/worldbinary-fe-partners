import {
  IAuthResponse,
  IUser,
} from "../../../../interfaces/auth/user.interface";

const mockUser: IUser = {
  id: "1a2b3c4d5e6f7g8h9i0j",
  email: "example@example.com",
  username: "exampleUser",
  email_verified_at: "2024-07-14T12:34:56.000Z",
  phone: "123-456-7890",
  avatar: "/public/mock/persona.png",
  created_at: "2024-01-01T00:00:00.000Z",
  updated_at: "2024-07-14T12:34:56.000Z",
};

export const mockAuthResponse: IAuthResponse = {
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.abc123def456ghi789jkl",
  user: mockUser,
};
