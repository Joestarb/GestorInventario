import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { movementsType } from "../../models/dtos/movementsType/movementsType";
import { baseUrl } from "../../utils/baseUrl";

export const movementsTypeSlice = createApi({
    reducerPath: "movementsType",
    baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
    endpoints: (builder) => ({
        getMovementsType: builder.query<movementsType[], void>({
            query: () => ({
                url: "/movementsTypes/getMovementsTypes",
                method: "GET",
            }),
        }),
        createMovementsType: builder.mutation<void, Partial<movementsType>>({
            query: (newMovement) => ({
                url: "/movementsTypes/createMovementType",
                method: "POST",
                body: newMovement,
            }),
        }),
        updateMovementsType: builder.mutation<void, movementsType>({
            query: (updateMovement) => ({
                url: `/movementsTypes/updateMovementType/${updateMovement.id_movement_type}`,
                method: "PUT",
                body: updateMovement,
            }),
        }),
        deleteMovementsType: builder.mutation<void, number>({
            query: (id) => ({
                url: `/movementsTypes/deleteMovementType/${id}`,
                method: "DELETE",
            }),
        }),
    }),
});

export const { useGetMovementsTypeQuery, useCreateMovementsTypeMutation, useUpdateMovementsTypeMutation, useDeleteMovementsTypeMutation } = movementsTypeSlice;