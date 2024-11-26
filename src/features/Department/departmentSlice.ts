import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { department } from "../../models/dtos/department/department";
import { baseUrl } from "../../utils/baseUrl";

export const departmentSlice = createApi({
    reducerPath: "departmentSlice",
    baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
    endpoints: (builder) => ({
        getDepartment: builder.query<department[], void>({
            query: () => ({
                url: "/Departments",
                method: "GET",
            }),
        }),
    }),
});

export const { useGetDepartmentQuery } = departmentSlice;