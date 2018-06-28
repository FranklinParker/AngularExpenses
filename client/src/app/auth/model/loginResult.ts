export interface LoginResult {
  success: boolean,
  token?: string;
  message?: string;
  expiresIn?:number;
  record?: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
  }


}
