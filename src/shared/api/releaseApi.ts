import { IReleasesApiResponse } from '@type/releaseTypes';
import { baseApi } from './base/baseApi';

const releaseApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getReleases: build.query<IReleasesApiResponse, void>({
      query: () => `/releases/1/`,
    }),
  }),
});

export const { useGetReleasesQuery } = releaseApi;
