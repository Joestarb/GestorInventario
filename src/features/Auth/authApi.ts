import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RegisterResponse, RegisterPayload,LoginResponse,LoginPayload } from "../../models/dtos/auth/authProps";
import { baseUrl } from '../../utils/baseUrl';


export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}/auth` }),
  endpoints: (builder) => ({
    // Endpoint de login
    login: builder.mutation<LoginResponse, LoginPayload>({
      query: (payload) => ({
        url: "/login",
        method: "POST",
        body: payload,
      }),
    }),
    register: builder.mutation<RegisterResponse, RegisterPayload>({
      query: (payload) => ({
        url: "/register",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;