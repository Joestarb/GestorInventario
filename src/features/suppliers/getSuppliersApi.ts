import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/baseUrl";
import {Suppliers} from "../../models/dtos/suppliers/Suppliers.ts";

export const getSuppliersApi = createApi({
    reducerPath: "getSuppliers",
    baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
    endpoints: (builder) => ({
        getSuppliers: builder.query<Suppliers[], void>({
            query: () => `/Suppliers/getSuppliers`,
        }),
    }),
});

export const { useGetSuppliersQuery } = getSuppliersApi;
