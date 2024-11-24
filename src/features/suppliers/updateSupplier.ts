import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/baseUrl";
import { SuppliersResponse, SuppliersPostAndPut } from "../../models/dtos/suppliers/Suppliers.ts";

export const updateSupplierApi = createApi({
    reducerPath: "updateSupplierApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
    endpoints: (builder) => ({
        updateSupplier: builder.mutation<SuppliersResponse, { id: number; data: SuppliersPostAndPut }>({
            query: ({ id, data }) => ({
                url: `/Suppliers/updateSupplier/${id}`,
                method: "PUT",
                body: data,
            }),
        }),
    }),
});

export const { useUpdateSupplierMutation } = updateSupplierApi;
