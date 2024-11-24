import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { companies } from "../../models/dtos/companies/companies";
import { baseUrl } from "../../utils/baseUrl";

export const companiesSlice = createApi({
    reducerPath: "companies",
    baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
    endpoints: (builder) => ({
        getCompanies: builder.query<companies[], void>({
            query: () => ({
                url: "/Companies",
                method: "GET",
            }),
        }),
        createCompanies: builder.mutation<void, Partial<companies>>({
            query: (newCompany) => ({
                url: "/Companies",
                method: "POST",
                body: newCompany,
            }),
        }),  
        updateCompanies: builder.mutation<void, companies>({
            query: (updateCompany) => ({
                url: `/Companies/${updateCompany.id_company}`,
                method: "PUT",
                body: updateCompany,
            }),
        }),
        deleteCompanies: builder.mutation<void, number>({
            query: (id) => ({
                url: `/Companies/${id}`,
                method: "DELETE",
            }),
        }),
    }),
});

export const { useGetCompaniesQuery, useCreateCompaniesMutation, useUpdateCompaniesMutation, useDeleteCompaniesMutation } = companiesSlice;