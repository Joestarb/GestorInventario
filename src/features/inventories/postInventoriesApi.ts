import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/baseUrl";
import { PostProduct, InventoryProduct } from "../../models/dtos/inventories/inventories";

export const createInventoryApi = createApi({
    reducerPath: "createInventoryProduct",
    baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
    endpoints: (builder) => ({
        createInventoryProduct: builder.mutation<InventoryProduct, PostProduct>({
            query: (newProduct) => ({
                url: `/Inventories/createInventoryProduct`,
                method: "POST",
                body: newProduct,
            }),

        }),
    }),
});

export const { useCreateInventoryProductMutation } = createInventoryApi;
