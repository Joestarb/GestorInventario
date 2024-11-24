import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/baseUrl";
import { InventoryMovement, InventoryMovementResponse } from "../../models/dtos/inventories/inventories";


export const createInventoryMovementApi = createApi({
    reducerPath: "createInventoryMovement",
    baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
    endpoints: (builder) => ({
        createInventoryMovement: builder.mutation<
            InventoryMovementResponse,
            Omit<InventoryMovement, "id_inventory_movement" | "date_insert" | "date_update" | "date_delete" | "date_restore">
        >({
            query: (payload) => ({
                url: `/api/InventoriesMovements/createInventoryMovement`,
                method: "POST",
                body: payload,
            }),
        }),
    }),
});

export const { useCreateInventoryMovementMutation } = createInventoryMovementApi;
