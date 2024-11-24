import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../../utils/baseUrl";

export const restoreCategoryPurchaseOrderApi = createApi({
  reducerPath: "restoreCategoryPurchaseOrderApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
  endpoints: (builder) => ({
    restoreCategoryPurchaseOrder: builder.mutation<void, number>({
      query: (id) => ({
        url: `/categoriesPurchaseOrders/restoreCategoryPurchaseOrder/${id}`,
        method: "POST",
      }),
    }),
  }),
});

export const { useRestoreCategoryPurchaseOrderMutation } = restoreCategoryPurchaseOrderApi;
