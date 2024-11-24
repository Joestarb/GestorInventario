import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { clasificationMovements } from "../../models/dtos/clasification/clasificationMovements";
import { baseUrl } from "../../utils/baseUrl";

export const clasificationMovementSlice = createApi({
    reducerPath: "clasificationMovements",
    baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
    endpoints: (builder) => ({
        getClasificationMovements: builder.query<clasificationMovements[], void>({
            query: () => ({
                url: "/ClasificationsMovements/getClasificationsMovements",
                method: "GET",
            }),
        }),
        createClasificationMovements: builder.mutation<void, Partial<clasificationMovements>>({
            query: (newClasificationMovements) => ({
                url: "/ClasificationsMovements/createClasificationMovement",
                method: "POST",
                body: newClasificationMovements,
            }),
        }),
        updateClasificationMovements: builder.mutation<void, clasificationMovements>({
            query: (updateClasificationMovements) => ({
                url: `/ClasificationsMovements/updateClasificationMovement/${updateClasificationMovements.id_clasification_movements}`,
                method: "PUT",
                body: updateClasificationMovements,
            }),
        }),
        deleteClasificationMovements: builder.mutation<void, number>({
            query: (id) => ({
                url: `/ClasificationsMovements/deleteClasificationMovement/${id}`,
                method: "DELETE",
            }),
        }),
    }),
});

export const { useGetClasificationMovementsQuery, useCreateClasificationMovementsMutation, useUpdateClasificationMovementsMutation, useDeleteClasificationMovementsMutation } = clasificationMovementSlice;