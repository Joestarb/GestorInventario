import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../../utils/baseUrl";

export const deleteCategoryProductApi = createApi({
  reducerPath: "deleteCategoryProductApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
  endpoints: (builder) => ({
    deleteCategoryProduct: builder.mutation<void, number>({
      query: (id) => ({
        url: `/CategoriesProducts/deleteCategoryProduct/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useDeleteCategoryProductMutation } = deleteCategoryProductApi;
