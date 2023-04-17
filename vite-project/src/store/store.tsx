import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { marvelService } from '../services/MarvelService';
import search from '../reducers/SearchSlice';
import forms from '../reducers/FormSlice';

export const rootReducer = combineReducers({
  [marvelService.reducerPath]: marvelService.reducer,
  search,
  forms,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(marvelService.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];

export default store;
