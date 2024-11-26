import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { purchaseOrder } from "../../models/dtos/order/purchaseOrder";
import { baseUrl } from "../../utils/baseUrl";

export const purchaseOrderSlice = createApi({
    reducerPath: "purchaseOrder",
    baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
    endpoints: (builder) => ({
        getPurchaseOrder: builder.query<purchaseOrder[], void>({
            query: () => ({
                url: "/PurchaseOrders/getPurchaseOrders",
                method: "GET",
            }),
        }),
        createPurchaseOrder: builder.mutation<void, Partial<purchaseOrder>>({
            query: (newPurchaseOrder) => ({
                url: "/PurchaseOrders/createPurchaseOrder",
                method: "POST",
                body: newPurchaseOrder,
            }),
        }),
        updatePurchaseOrder: builder.mutation<void, purchaseOrder>({
            query: (updatePurchaseOrder) => ({
                url: `/PurchaseOrders/updatePurchaseOrder/${updatePurchaseOrder.id_purchase_order}`,
            }),
        }),
        deletePurchaseOrder: builder.mutation<void, number>({
            query: (id) => ({
                url: `/PurchaseOrders/deletePurchaseOrder/${id}`,
                method: "DELETE",
            }),
        }),
    }),
});

export const { useGetPurchaseOrderQuery, useCreatePurchaseOrderMutation, useUpdatePurchaseOrderMutation, useDeletePurchaseOrderMutation } = purchaseOrderSlice;