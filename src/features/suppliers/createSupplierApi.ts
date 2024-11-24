import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/baseUrl";
import {SuppliersResponse,  SuppliersPostAndPut} from "../../models/dtos/suppliers/Suppliers.ts";


export const createSupplierApi = createApi({
    reducerPath: "createSupplierApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
    endpoints: (builder) => ({
        createSupplier: builder.mutation<SuppliersResponse,SuppliersPostAndPut>({
            query: (payload) => ({
                url: `/Suppliers/createSupplier`,
                method: "POST",
                body: payload,
            }),
        }),
    }),
});

export const { useCreateSupplierMutation } = createSupplierApi;
