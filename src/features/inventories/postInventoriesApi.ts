import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/baseUrl";
import { InventoryProduct } from "../../models/dtos/inventories/inventories";

export const createInventoryApi = createApi({
    reducerPath: "createInventoryProduct",
    baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
    endpoints: (builder) => ({
        createInventoryProduct: builder.mutation<void, Omit<InventoryProduct, 'id_inventory_product' | 'date_insert' | 'date_update' | 'date_delete' | 'date_restore'>>({
            query: (newProduct) => ({
                url: `/Inventories/createInventoryProduct`,
                method: "POST",
                body: newProduct,
            }),
        }),
    }),
});

export const { useCreateInventoryProductMutation } = createInventoryApi;
