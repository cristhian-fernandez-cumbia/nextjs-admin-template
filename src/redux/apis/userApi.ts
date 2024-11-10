import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User } from '@/interfaces/user';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
  endpoints: (builder) => ({
    getAllUsers: builder.query<User[], void>({
      query: () => '/users',
    }),
    getUser: builder.query<User, number>({
      query: (id) => `/users/${id}`,
    }),
    getCategories: builder.query<string[], void>({
      query: () => '/users/categories',
    }),
    getUsersByCategory: builder.query<User[], string>({
      query: (category) => `/users/category/${category}`,
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetUserQuery,
  useGetCategoriesQuery,
  useGetUsersByCategoryQuery,
} = userApi;
