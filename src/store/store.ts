import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import counterReducer from "../features/counter/counterSlice";
import themeReducer from '../features/theme/themeSlice';
import languageReducer from '../features/language/languageSlice'
import { authApi } from "../features/Auth/authApi";
import { rolesApi } from "../features/roles/rolesApi";
import { movementsTypeSlice } from "../features/movementsType/movementsTypeSlice";
import { clasificationMovementSlice } from "../features/clasification/clasificationMovementSlice";
import { purchaseOrderSlice } from "../features/order/purchaseOrderSlice";
import { companiesSlice } from "../features/companies/companiesSlice";

// in this place you can import your reducers
// import someReducer from './someSlice';

export const store = configureStore({
  reducer: {
    // Add slices here
    // someSlice: someReducer,
    theme: themeReducer,
    counter: counterReducer,
    language: languageReducer, 
    [authApi.reducerPath]: authApi.reducer,
    [rolesApi.reducerPath]: rolesApi.reducer,
    [movementsTypeSlice.reducerPath]: movementsTypeSlice.reducer,
    [clasificationMovementSlice.reducerPath]: clasificationMovementSlice.reducer,
    [purchaseOrderSlice.reducerPath]: purchaseOrderSlice.reducer,
    [companiesSlice.reducerPath]: companiesSlice.reducer

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(rolesApi.middleware)
      .concat(movementsTypeSlice.middleware)
      .concat(clasificationMovementSlice.middleware)
      .concat(purchaseOrderSlice.middleware)
      .concat(companiesSlice.middleware),
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;