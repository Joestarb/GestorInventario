import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CategorySupplier } from "../../../models/dtos/Categories/Supplier/CategorySupplier";
import { baseUrl } from "../../../utils/baseUrl";

export const filterByNameCategorySupplierApi = createApi({
  reducerPath: "filterByNameCategorySupplierApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
  endpoints: (builder) => ({
    filterByName: builder.query<CategorySupplier[], string>({
      query: (name) => ({
        url: "/CategoriesSuppliers/filterByName",
        method: "GET",
        params: { name },
      }),
    }),
  }),
});

export const { useFilterByNameQuery } = filterByNameCategorySupplierApi;
