import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CategoryProduct } from "../../../models/dtos/Categories/Product/CategoryProduct";
import { baseUrl } from "../../../utils/baseUrl";

export const createCategoryProductApi = createApi({
  reducerPath: "createCategoryProductApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
  endpoints: (builder) => ({
    createCategoryProduct: builder.mutation<void, Partial<CategoryProduct>>({
      query: (dto) => ({
        url: "/CategoriesProducts/createCategoryProduct",
        method: "POST",
        body: dto,
      }),
    }),
  }),
});

export const { useCreateCategoryProductMutation } = createCategoryProductApi;
