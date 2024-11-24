import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CategorySupplier } from "../../../models/dtos/Categories/Supplier/CategorySupplier";
import { baseUrl } from "../../../utils/baseUrl";

export const createSupplierApi = createApi({
  reducerPath: "createSupplierApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
  endpoints: (builder) => ({
    createSupplier: builder.mutation<void, Partial<CategorySupplier>>({
      query: (dto) => ({
        url: "/CategoriesSuppliers/createSupplier",
        method: "POST",
        body: dto,
      }),
    }),
  }),
});

export const { useCreateSupplierMutation } = createSupplierApi;
