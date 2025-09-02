export type UserFilterDoneType = 'active' | 'inactive' | 'all';

export type UserStatus = "active" | "inactive";

export type UserType = {
  id: number;
  username: string;
  password: string;
  confirmPassword: string;
  status: UserStatus;
};
