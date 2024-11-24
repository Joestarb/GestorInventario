import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../../utils/baseUrl";

export const restoreCategoryProductApi = createApi({
  reducerPath: "restoreCategoryProductApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}`}),
  endpoints: (builder) => ({
    restoreCategoryProduct: builder.mutation<void, number>({
      query: (id) => ({
        url: `/categoriesProducts/restoreCategoryProduct/${id}`,
        method: "POST",
      }),
    }),
  }),
});

export const { useRestoreCategoryProductMutation } = restoreCategoryProductApi;
