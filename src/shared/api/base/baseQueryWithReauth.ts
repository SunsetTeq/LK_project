import { baseQuery } from './baseQuery';
import { logOut } from '@slices/authSlice';
import {
  BaseQueryApi,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  QueryReturnValue,
} from '@reduxjs/toolkit/query';

const AUTH_ERROR_CODES = new Set([401]);

export async function baseQueryWithReauth(
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: {},
): Promise<QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>> {
  // Выполняем запрос
  const result = await baseQuery(args, api, extraOptions);

  // Если пришла ошибка авторизации - разлогиневаем пользователя
  if (
    typeof result.error?.status === 'number' &&
    AUTH_ERROR_CODES.has(result.error.status)
  ) {
    api.dispatch(logOut());
  }

  return result;
}
