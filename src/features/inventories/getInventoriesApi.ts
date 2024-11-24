import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { InventoryProduct } from "../../models/dtos/inventories/inventories";
import { baseUrl } from "../../utils/baseUrl";

export const getInventoriesApi = createApi({
  reducerPath: "getInventoriesProducts", 
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
  endpoints: (builder) => ({
    getInventories: builder.query<InventoryProduct[], void>({
      query: () => ({
        url: "/Inventories/getInventoriesProducts",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetInventoriesQuery } = getInventoriesApi;
