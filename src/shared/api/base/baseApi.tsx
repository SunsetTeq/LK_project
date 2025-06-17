import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { baseQueryWithReauth } from './baseQueryWithReauth';

export const baseApi = createApi({
  tagTypes: [],
  reducerPath: 'api',
  // baseQuery: baseQueryWithReauth, временно заменил на путь до json-server
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: () => ({}),
});
