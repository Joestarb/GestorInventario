import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CategoryPurchaseOrder} from "../../../models/dtos/Categories/PurchaseOrder/CategoryPurchaseOrder";
import { baseUrl } from "../../../utils/baseUrl";

export const filterByNameCategoryPurchaseOrderApi = createApi({
  reducerPath: "filterByNameCategoryPurchaseOrderApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
  endpoints: (builder) => ({
    filterByName: builder.query<CategoryPurchaseOrder[], string>({
      query: (name) => ({
        url: "/CategoriesPurchaseOrders/filterByName",
        method: "GET",
        params: { name },
      }),
    }),
  }),
});

export const { useFilterByNameQuery } = filterByNameCategoryPurchaseOrderApi;
