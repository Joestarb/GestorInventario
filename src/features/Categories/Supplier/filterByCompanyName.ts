import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CategorySupplier } from "../../../models/dtos/Categories/Supplier/CategorySupplier";
import { baseUrl } from "../../../utils/baseUrl";

export const filterByCompanyNameCategorySupplierApi = createApi({
  reducerPath: "filterByCompanyNameCategorySupplierApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
  endpoints: (builder) => ({
    filterByCompanyName: builder.query<CategorySupplier[], string>({
      query: (companyName) => ({
        url: "/CategoriesSuppliers/filterByCompanyName",
        method: "GET",
        params: { companyName },
      }),
    }),
  }),
});

export const { useFilterByCompanyNameQuery } = filterByCompanyNameCategorySupplierApi;
