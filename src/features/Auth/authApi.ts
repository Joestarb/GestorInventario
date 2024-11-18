import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RegisterResponse, RegisterPayload } from "../../models/dtos/auth/authProps";
import {baseUrl} from '../../utils/baseUrl'



export const authApi = createApi({
  reducerPath: "authApi", 
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}/auth` }),
  endpoints: (builder) => ({
    register: builder.mutation<RegisterResponse, RegisterPayload>({
      query: (payload) => ({
        url: "/register",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const { useRegisterMutation } = authApi;
