import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CategorySupplier } from "../../../models/dtos/Categories/Supplier/CategorySupplier";
import { baseUrl } from "../../../utils/baseUrl";

export const getCategoriesSuppliersApi = createApi({
  reducerPath: "getCategoriesSuppliersApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
  endpoints: (builder) => ({
    getCategoriesSuppliers: builder.query<CategorySupplier[], void>({
      query: () => ({
        url: "/categoriesSuppliers/getCategoriesSuppliers",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCategoriesSuppliersQuery } = getCategoriesSuppliersApi;
