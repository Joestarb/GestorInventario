import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Role } from "../../models/dtos/roles/roles";
import { baseUrl } from "../../utils/baseUrl";

export const rolesApi = createApi({
  reducerPath: "rolesApi", 
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
  endpoints: (builder) => ({
    getRoles: builder.query<Role[], void>({
      query: () => ({
        url: "/roles",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetRolesQuery } = rolesApi;