import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CategoryPurchaseOrder} from "../../../models/dtos/Categories/PurchaseOrder/CategoryPurchaseOrder";
import { baseUrl } from "../../../utils/baseUrl";

export const getCategoriesPurchaseOrdersApi = createApi({
  reducerPath: "getCategoriesPurchaseOrdersApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
  endpoints: (builder) => ({
    getCategoriesPurchaseOrders: builder.query<CategoryPurchaseOrder[], void>({
      query: () => ({
        url: "/categoriesPurchaseOrders/getCategoriesPurchaseOrders",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCategoriesPurchaseOrdersQuery } = getCategoriesPurchaseOrdersApi;
