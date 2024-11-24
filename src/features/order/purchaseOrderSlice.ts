import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { purchaseOrder } from "../../models/dtos/order/purchaseOrder";
import { baseUrl } from "../../utils/baseUrl";

export const purchaseOrderSlice = createApi({
    reducerPath: "purchaseOrder",
    baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
    endpoints: (builder) => ({
        getPurchaseOrder: builder.query<purchaseOrder[], void>({
            query: () => ({
                url: "/purchaseOrder/getPurchaseOrders",
                method: "GET",
            }),
        }),
    }),
});

export const { useGetPurchaseOrderQuery } = purchaseOrderSlice;