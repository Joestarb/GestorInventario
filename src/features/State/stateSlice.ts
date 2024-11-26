import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { states } from "../../models/dtos/states/states";
import { baseUrl } from "../../utils/baseUrl";

export const stateSlice = createApi({
    reducerPath: "stateSlice",
    baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
    endpoints: (builder) => ({
        getState: builder.query<states[], void>({
            query: () => ({
                url: "/States/getStates",
                method: "GET",
            }),
        }),
    }),
});

export const { useGetStateQuery } = stateSlice;