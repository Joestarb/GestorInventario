import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/baseUrl";
import { InventoryMovement, InventoryMovementResponse } from "../../models/dtos/inventories/inventories";



export const updateInventoryMovementApi = createApi({
  reducerPath: "updateInventoryMovement",
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
  endpoints: (builder) => ({
    updateInventoryMovement: builder.mutation<
      InventoryMovementResponse,
      { id: number; data: Partial<Omit<InventoryMovement, "id_inventory_movement">> }
    >({
      query: ({ id, data }) => ({
        url: `/InventoriesMovements/updateInventoryMovement/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const { useUpdateInventoryMovementMutation } = updateInventoryMovementApi;
