import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/baseUrl";

export interface DeleteInventoryMovementResponse {
    success: boolean;
    message: string;
}

export const deleteInventoryMovementApi = createApi({
    reducerPath: "deleteInventoryMovement",
    baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
    endpoints: (builder) => ({
        deleteInventoryMovement: builder.mutation<DeleteInventoryMovementResponse, number>({
            query: (id) => ({
                url: `/api/InventoriesMovements/deleteInventoryMovement/${id}`,
                method: "DELETE",
            }),
        }),
    }),
});

export const { useDeleteInventoryMovementMutation } = deleteInventoryMovementApi;
