import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CategoryProduct } from "../../../models/dtos/Categories/Product/CategoryProduct";
import { baseUrl } from "../../../utils/baseUrl";

export const updateCategoryProductApi = createApi({
  reducerPath: "updateCategoryProductApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
  endpoints: (builder) => ({
    updateCategoryProduct: builder.mutation<void, { id: number; data: Partial<CategoryProduct> }>({
      query: ({ id, data }) => ({
        url: `/categoriesProducts/updateCategoryProduct/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const { useUpdateCategoryProductMutation } = updateCategoryProductApi;
