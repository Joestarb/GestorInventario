import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import counterReducer from "../features/counter/counterSlice";
import themeReducer from '../features/theme/themeSlice';
import languageReducer from '../features/language/languageSlice';
import { authApi } from "../features/Auth/authApi";
import { rolesApi } from "../features/roles/rolesApi";

import { getCategoriesProductsApi } from "../features/Categories/Product/getCategoriesProducts";
import { createCategoryProductApi } from "../features/Categories/Product/createCategoryProduct";
import { updateCategoryProductApi } from "../features/Categories/Product/updateCategoryProduct";
import { deleteCategoryProductApi } from "../features/Categories/Product/deleteCategoryProduct";
import { restoreCategoryProductApi } from "../features/Categories/Product/restoreCategoryProduct";
import { filterByNameCategoryProductApi } from "../features/Categories/Product/filterByName";
import { filterByCompanyNameCategoryProductApi } from "../features/Categories/Product/filterByCompanyName";

import { getCategoriesPurchaseOrdersApi } from "../features/Categories/PurchaseOrder/getCategoriesPurchaseOrders";
import { createCategoryPurchaseOrderApi } from "../features/Categories/PurchaseOrder/createCategoryPurchaseOrder";
import { updateCategoryPurchaseOrderApi } from "../features/Categories/PurchaseOrder/updateCategoryPurchaseOrder";
import { deleteCategoryPurchaseOrderApi } from "../features/Categories/PurchaseOrder/deleteCategoryPurchaseOrder";
import { restoreCategoryPurchaseOrderApi } from "../features/Categories/PurchaseOrder/restoreCategoryPurchaseOrder";
import { filterByNameCategoryPurchaseOrderApi } from "../features/Categories/PurchaseOrder/filterByName";
import { filterByCompanyNameCategoryPurchaseOrderApi } from "../features/Categories/PurchaseOrder/filterByCompanyName";

import { getCategoriesSuppliersApi } from "../features/Categories/Supplier/getCategoriesSuppliers";
import { createSupplierApi } from "../features/Categories/Supplier/createCategorySupplier";
import { updateCategorySupplierApi } from "../features/Categories/Supplier/updateCategorySupplier";
import { deleteCategorySupplierApi } from "../features/Categories/Supplier/deleteCategorySupplier";
import { restoreCategorySupplierApi } from "../features/Categories/Supplier/restoreCategorySupplier";
import { filterByNameCategorySupplierApi } from "../features/Categories/Supplier/filterByName";
import { filterByCompanyNameCategorySupplierApi  } from "../features/Categories/Supplier/filterByCompanyName";

export const store = configureStore({
  reducer: {
    // Reducers preexistentes
    theme: themeReducer,
    counter: counterReducer,
    language: languageReducer,
    [authApi.reducerPath]: authApi.reducer,
    [rolesApi.reducerPath]: rolesApi.reducer,

    // Agregar reducers de las nuevas APIs
    [getCategoriesProductsApi.reducerPath]: getCategoriesProductsApi.reducer,
    [createCategoryProductApi.reducerPath]: createCategoryProductApi.reducer,
    [updateCategoryProductApi.reducerPath]: updateCategoryProductApi.reducer,
    [deleteCategoryProductApi.reducerPath]: deleteCategoryProductApi.reducer,
    [restoreCategoryProductApi.reducerPath]: restoreCategoryProductApi.reducer,
    [filterByNameCategoryProductApi.reducerPath]: filterByNameCategoryProductApi.reducer,
    [filterByCompanyNameCategoryProductApi.reducerPath]: filterByCompanyNameCategoryProductApi.reducer,

    [getCategoriesPurchaseOrdersApi.reducerPath]: getCategoriesPurchaseOrdersApi.reducer,
    [createCategoryPurchaseOrderApi.reducerPath]: createCategoryPurchaseOrderApi.reducer,
    [updateCategoryPurchaseOrderApi.reducerPath]: updateCategoryPurchaseOrderApi.reducer,
    [deleteCategoryPurchaseOrderApi.reducerPath]: deleteCategoryPurchaseOrderApi.reducer,
    [restoreCategoryPurchaseOrderApi.reducerPath]: restoreCategoryPurchaseOrderApi.reducer,
    [filterByNameCategoryPurchaseOrderApi.reducerPath]: filterByNameCategoryPurchaseOrderApi.reducer,
    [filterByCompanyNameCategoryPurchaseOrderApi.reducerPath]: filterByCompanyNameCategoryPurchaseOrderApi.reducer,

    [getCategoriesSuppliersApi.reducerPath]: getCategoriesSuppliersApi.reducer,
    [createSupplierApi.reducerPath]: createSupplierApi.reducer,
    [updateCategorySupplierApi.reducerPath]: updateCategorySupplierApi.reducer,
    [deleteCategorySupplierApi.reducerPath]: deleteCategorySupplierApi.reducer,
    [restoreCategorySupplierApi.reducerPath]: restoreCategorySupplierApi.reducer,
    [filterByNameCategorySupplierApi.reducerPath]: filterByNameCategorySupplierApi.reducer,
    [filterByCompanyNameCategorySupplierApi.reducerPath]: filterByCompanyNameCategorySupplierApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(rolesApi.middleware)
      // Middleware de las nuevas APIs
      .concat(getCategoriesProductsApi.middleware)
      .concat(createCategoryProductApi.middleware)
      .concat(updateCategoryProductApi.middleware)
      .concat(deleteCategoryProductApi.middleware)
      .concat(restoreCategoryProductApi.middleware)
      .concat(filterByNameCategoryProductApi.middleware)
      .concat(filterByCompanyNameCategoryProductApi.middleware)

      .concat(getCategoriesPurchaseOrdersApi.middleware)
      .concat(createCategoryPurchaseOrderApi.middleware)
      .concat(updateCategoryPurchaseOrderApi.middleware)
      .concat(deleteCategoryPurchaseOrderApi.middleware)
      .concat(restoreCategoryPurchaseOrderApi.middleware)
      .concat(filterByNameCategoryPurchaseOrderApi.middleware)
      .concat(filterByCompanyNameCategoryPurchaseOrderApi.middleware)

      .concat(getCategoriesSuppliersApi.middleware)
      .concat(createSupplierApi.middleware)
      .concat(updateCategorySupplierApi.middleware)
      .concat(deleteCategorySupplierApi.middleware)
      .concat(restoreCategorySupplierApi.middleware)
      .concat(filterByNameCategorySupplierApi.middleware)
      .concat(filterByCompanyNameCategorySupplierApi.middleware)
    });

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
