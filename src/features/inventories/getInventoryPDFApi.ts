import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { InventoryPDF} from "../../models/dtos/inventories/inventories";
import { baseUrl } from "../../utils/baseUrl";

export const inventoryPDFApi = createApi({
  reducerPath: "inventoryPDFApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
  endpoints: (builder) => ({
    getInventoryPDF: builder.query<Blob, InventoryPDF>({
      query: ({ companyName, departmentName }) => ({
        url: "/Inventories/InventoryPDF", 
        method: "GET", 
        params: { companyName, departmentName }, 
        responseHandler: (response) => response.blob(), 
      }),
    }),
  }),
});

// Hook generado automáticamente para usar en componentes
export const { useGetInventoryPDFQuery } = inventoryPDFApi;
