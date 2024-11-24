import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/baseUrl";
import { SuppliersResponse } from "../../models/dtos/suppliers/Suppliers.ts";

export const deleteSupplierApi = createApi({
    reducerPath: "deleteSupplierApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
    endpoints: (builder) => ({
        deleteSupplier: builder.mutation<SuppliersResponse, number>({
            query: (id) => ({
                url: `/Suppliers/deleteSupplier/${id}`,
                method: "DELETE",
            }),
        }),
    }),
});

export const { useDeleteSupplierMutation } = deleteSupplierApi;
