import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import counterReducer from "../features/counter/counterSlice";
import themeReducer from '../features/theme/themeSlice';
import languageReducer from '../features/language/languageSlice'


// in this place you can import your reducers
// import someReducer from './someSlice';

export const store = configureStore({
  reducer: {
    // Add slices here
    // someSlice: someReducer,
    theme: themeReducer,
    counter: counterReducer,
    language: languageReducer, // Agrega el slice de idioma
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;