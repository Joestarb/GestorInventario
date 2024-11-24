import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/baseUrl";

export const deleteInventoryApi = createApi({
    reducerPath: "deleteInventoryProduct",
    baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
    endpoints: (builder) => ({
        deleteInventoryProduct: builder.mutation<void, number>({
            query: (id) => ({
                url: `/api/Inventories/deleteInventoryProduct/${id}`,
                method: "DELETE",
            }),
        }),
    }),
});

export const { useDeleteInventoryProductMutation } = deleteInventoryApi;

