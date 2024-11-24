import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CategoryProduct } from "../../../models/dtos/Categories/Product/CategoryProduct";
import { baseUrl } from "../../../utils/baseUrl";

export const getCategoriesProductsApi = createApi({
  reducerPath: "getCategoriesProductsApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
  endpoints: (builder) => ({
    getCategoriesProducts: builder.query<CategoryProduct[], void>({
      query: () => ({
        url: "/CategoriesProducts/getCategoriesProducts",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCategoriesProductsQuery } = getCategoriesProductsApi;
