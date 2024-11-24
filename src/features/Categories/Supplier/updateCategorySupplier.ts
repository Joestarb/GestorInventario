import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CategorySupplier } from "../../../models/dtos/Categories/Supplier/CategorySupplier";
import { baseUrl } from "../../../utils/baseUrl";

export const updateCategorySupplierApi = createApi({
  reducerPath: "updateCategorySupplierApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
  endpoints: (builder) => ({
    updateCategorySupplier: builder.mutation<void, { id: number; data: Partial<CategorySupplier> }>({
      query: ({ id, data }) => ({
        url: `/CategoriesSuppliers/updateCategorySupplier/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const { useUpdateCategorySupplierMutation } = updateCategorySupplierApi;
