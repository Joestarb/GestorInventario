import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CategoryPurchaseOrder} from "../../../models/dtos/Categories/PurchaseOrder/CategoryPurchaseOrder";
import { baseUrl } from "../../../utils/baseUrl";

export const updateCategoryPurchaseOrderApi = createApi({
  reducerPath: "updateCategoryPurchaseOrderApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
  endpoints: (builder) => ({
    updateCategoryPurchaseOrder: builder.mutation<void, { id: number; data: Partial<CategoryPurchaseOrder> }>({
      query: ({ id, data }) => ({
        url: `/CategoriesPurchaseOrders/updateCategoryPurchaseOrder/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const { useUpdateCategoryPurchaseOrderMutation } = updateCategoryPurchaseOrderApi;
