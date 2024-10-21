// src/hooks/useRedux.ts
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store/store";

// Custom hook to use dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;

// Custom hookto use selector whit types
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
