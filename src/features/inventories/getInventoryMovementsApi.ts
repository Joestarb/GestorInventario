import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/baseUrl";
import {InventoryMovement} from "../../models/dtos/inventories/inventories.ts";


export const getInventoryMovementsApi = createApi({
    reducerPath: "getInventoryMovements",
    baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
    endpoints: (builder) => ({
        getInventoryMovements: builder.query<InventoryMovement[], void>({
            query: () => `/InventoriesMovements/getInventoryMovements`,

        }),
    }),
});

export const { useGetInventoryMovementsQuery } = getInventoryMovementsApi;
