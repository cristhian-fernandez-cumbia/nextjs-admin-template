import { Module } from '@/interfaces/module';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const moduleApi = createApi({
  reducerPath: 'moduleApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getUserModules: builder.query<Module[], void>({
      query: () => '/modules', 
    }),
  }),
});

export const { useGetUserModulesQuery } = moduleApi;
