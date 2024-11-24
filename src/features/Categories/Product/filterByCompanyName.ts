import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CategoryProduct } from "../../../models/dtos/Categories/Product/CategoryProduct";
import { baseUrl } from "../../../utils/baseUrl";

export const filterByCompanyNameCategoryProductApi = createApi({
  reducerPath: "filterByCompanyNameCategoryProductApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
  endpoints: (builder) => ({
    filterByCompanyName: builder.query<CategoryProduct[], string>({
      query: (companyName) => ({
        url: "/CategoriesProducts/filterByCompanyName",
        method: "GET",
        params: { companyName },
      }),
    }),
  }),
});

export const { useFilterByCompanyNameQuery } = filterByCompanyNameCategoryProductApi;
