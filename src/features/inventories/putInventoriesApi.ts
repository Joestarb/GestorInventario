import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/baseUrl";
import {PostProduct, InventoryProduct} from "../../models/dtos/inventories/inventories";

export const updateInventoryApi = createApi({
    reducerPath: "updateInventoryProduct",
    baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
    endpoints: (builder) => ({
        updateInventoryProduct: builder.mutation<InventoryProduct, { id: number; data: PostProduct }>({
            query: ({ id, data }) => ({
                url: `/Inventories/updateInventoryProduct/${id}`,
                method: "PUT",
                body: data,
            }),
        }),
    }),
});

export const { useUpdateInventoryProductMutation } = updateInventoryApi;
