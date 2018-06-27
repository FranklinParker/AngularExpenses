export interface LoginResult {
  success: boolean,
  token?: string;
  message?: string;
  record?: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
  }


}
