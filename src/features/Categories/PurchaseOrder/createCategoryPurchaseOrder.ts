import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CategoryPurchaseOrder} from "../../../models/dtos/Categories/PurchaseOrder/CategoryPurchaseOrder";
import { baseUrl } from "../../../utils/baseUrl";

export const createCategoryPurchaseOrderApi = createApi({
  reducerPath: "createCategoryPurchaseOrderApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}`}),
  endpoints: (builder) => ({
    createCategoryPurchaseOrder: builder.mutation<void, Partial<CategoryPurchaseOrder>>({
      query: (dto) => ({
        url: "/CategoriesPurchaseOrders/createCategoryPurchaseOrder",
        method: "POST",
        body: dto,
      }),
    }),
  }),
});

export const { useCreateCategoryPurchaseOrderMutation } = createCategoryPurchaseOrderApi;
