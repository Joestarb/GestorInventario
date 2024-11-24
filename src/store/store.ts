import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import counterReducer from "../features/counter/counterSlice";
import themeReducer from '../features/theme/themeSlice';
import languageReducer from '../features/language/languageSlice'
import { authApi } from "../features/Auth/authApi";
import { rolesApi } from "../features/roles/rolesApi";
import { getInventoriesApi } from "../features/inventories/getInventoriesApi";
import {deleteInventoryApi} from "../features/inventories/deleteInventoriesApi.ts";
import {updateInventoryApi} from "../features/inventories/putInventoriesApi.ts";
import {createInventoryApi} from "../features/inventories/postInventoriesApi.ts";
import {getInventoryMovementsApi} from "../features/inventories/getInventoryMovementsApi.ts";
import {createInventoryMovementApi} from "../features/inventories/createInventoryMovementApi.ts"
import {deleteInventoryMovementApi} from "../features/inventories/deleteInventoryMovementApi.ts"
import {updateInventoryMovementApi} from "../features/inventories/updateInventoryMovementApi.ts"
import {getSuppliersApi} from "../features/suppliers/getSuppliersApi.ts";
import {deleteSupplierApi} from "../features/suppliers/deleteSupplierApi.ts";
import {createSupplierApi} from "../features/suppliers/createSupplierApi.ts";
import {updateSupplierApi} from "../features/suppliers/updateSupplier.ts";

export const store = configureStore({
  reducer: {
    // Add slices here
    // someSlice: someReducer,
    theme: themeReducer,
    counter: counterReducer,
    language: languageReducer,
    [authApi.reducerPath]: authApi.reducer,
    [rolesApi.reducerPath]: rolesApi.reducer,
    //inventory
    [getInventoriesApi.reducerPath]:getInventoriesApi.reducer,
    [deleteInventoryApi.reducerPath]: deleteInventoryApi.reducer,
    [updateInventoryApi.reducerPath]: updateInventoryApi.reducer,
    [createInventoryApi.reducerPath]: createInventoryApi.reducer,
    [getInventoryMovementsApi.reducerPath]: getInventoryMovementsApi.reducer,
    [createInventoryMovementApi.reducerPath]: createInventoryMovementApi.reducer,
    [deleteInventoryMovementApi.reducerPath]: deleteInventoryMovementApi.reducer,
    [updateInventoryMovementApi.reducerPath]: updateInventoryMovementApi.reducer,
    //suppliers
    [getSuppliersApi.reducerPath]: getSuppliersApi.reducer,
    [deleteSupplierApi.reducerPath]: deleteSupplierApi.reducer,
    [createSupplierApi.reducerPath]: createSupplierApi.reducer,
    [updateSupplierApi.reducerPath]: updateSupplierApi.reducer,



  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(rolesApi.middleware)
        //inventories
      .concat(getInventoriesApi.middleware)
      .concat(deleteInventoryApi.middleware)
      .concat(updateInventoryApi.middleware)
      .concat(createInventoryApi.middleware)
      .concat(getInventoryMovementsApi.middleware)
      .concat(createInventoryMovementApi.middleware)
      .concat(deleteInventoryMovementApi.middleware)
        //suppliers
      .concat(getSuppliersApi.middleware)
      .concat(deleteSupplierApi.middleware)
      .concat( createSupplierApi.middleware)
      .concat( updateSupplierApi.middleware)





});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;