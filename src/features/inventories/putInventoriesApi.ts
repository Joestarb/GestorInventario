import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/baseUrl";
import { InventoryProduct } from "../../models/dtos/inventories/inventories";

export const updateInventoryApi = createApi({
    reducerPath: "updateInventoryProduct",
    baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
    endpoints: (builder) => ({
        updateInventoryProduct: builder.mutation<void, { id: number; data: Partial<InventoryProduct> }>({
            query: ({ id, data }) => ({
                url: `/Inventories/updateInventoryProduct/${id}`,
                method: "PUT",
                body: data,
            }),
        }),
    }),
});

export const { useUpdateInventoryProductMutation } = updateInventoryApi;
