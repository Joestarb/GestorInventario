import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CategoryPurchaseOrder} from "../../../models/dtos/Categories/PurchaseOrder/CategoryPurchaseOrder";
import { baseUrl } from "../../../utils/baseUrl";

export const filterByCompanyNameCategoryPurchaseOrderApi = createApi({
  reducerPath: "filterByCompanyNameCategoryPurchaseOrderApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
  endpoints: (builder) => ({
    filterByCompanyName: builder.query<CategoryPurchaseOrder[], string>({
      query: (companyName) => ({
        url: "/CategoriesPurchaseOrders/filterByCompanyName",
        method: "GET",
        params: { companyName },
      }),
    }),
  }),
});

export const { useFilterByCompanyNameQuery } = filterByCompanyNameCategoryPurchaseOrderApi;
