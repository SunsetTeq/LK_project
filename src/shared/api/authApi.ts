import { IUserAuthApiResponse, IUserAuthRequestParams } from '@type/authTypes';
import { baseApi } from './base/baseApi';

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<IUserAuthApiResponse, IUserAuthRequestParams>({
      query: (body) => ({
        // Переопределяем базовый url указывая его полностью
        url: `https://tbmp-test-server.ru/users/auth_t/token/login`,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
