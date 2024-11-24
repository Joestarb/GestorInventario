import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../../utils/baseUrl";

export const deleteCategorySupplierApi = createApi({
  reducerPath: "deleteCategorySupplierApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
  endpoints: (builder) => ({
    deleteCategorySupplier: builder.mutation<void, number>({
      query: (id) => ({
        url: `/CategoriesSuppliers/deleteCategorySupplier/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useDeleteCategorySupplierMutation } = deleteCategorySupplierApi;
