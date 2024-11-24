import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CategoryProduct } from "../../../models/dtos/Categories/Product/CategoryProduct";
import { baseUrl } from "../../../utils/baseUrl";

export const filterByNameCategoryProductApi = createApi({
  reducerPath: "filterByNameCategoryProductApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
  endpoints: (builder) => ({
    filterByName: builder.query<CategoryProduct[], string>({
      query: (name) => ({
        url: "/CategoriesProducts/filterByName",
        method: "GET",
        params: { name },
      }),
    }),
  }),
});

export const { useFilterByNameQuery } = filterByNameCategoryProductApi;
