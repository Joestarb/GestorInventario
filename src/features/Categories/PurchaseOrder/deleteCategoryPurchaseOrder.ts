import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../../utils/baseUrl";

export const deleteCategoryPurchaseOrderApi = createApi({
  reducerPath: "deleteCategoryPurchaseOrderApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}`}),
  endpoints: (builder) => ({
    deleteCategoryPurchaseOrder: builder.mutation<void, number>({
      query: (id) => ({
        url: `/CategoriesPurchaseOrders/deleteCategoryPurchaseOrder/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useDeleteCategoryPurchaseOrderMutation } = deleteCategoryPurchaseOrderApi;
