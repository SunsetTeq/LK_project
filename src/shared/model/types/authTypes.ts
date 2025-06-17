export interface IUserAuthApiResponse {
  auth_token: string;
}

export interface IUserAuthRequestParams {
  username: string;
  password: string;
}
