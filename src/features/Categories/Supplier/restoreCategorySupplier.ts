import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../../utils/baseUrl";

export const restoreCategorySupplierApi = createApi({
  reducerPath: "restoreCategorySupplierApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
  endpoints: (builder) => ({
    restoreCategorySupplier: builder.mutation<void, number>({
      query: (id) => ({
        url: `/categoriesSuppliers/restoreCategorySupplier/${id}`,
        method: "POST",
      }),
    }),
  }),
});

export const { useRestoreCategorySupplierMutation } = restoreCategorySupplierApi;
