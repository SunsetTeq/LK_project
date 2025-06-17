import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query/react';
import { RootState } from '@app/store/AppStore';

const rawBaseQuery = (baseUrl: string) =>
  fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      // Добавляем токен в headers запроса
      const { token } = (getState() as RootState).auth;

      if (token) {
        headers.set('authorization', `Token ${token}`);
      }

      return headers;
    },
  });

export const baseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError,
  {},
  FetchBaseQueryMeta
> = async (args, api, extraOptions) => {
  // Базовый url для всех запросов к api
  const baseUrl = `${import.meta.env.VITE_BASE_URL}/api/v1/`;

  return rawBaseQuery(baseUrl)(args, api, extraOptions);
};
