import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { marvelService } from '../services/MarvelService';
import search from '../reducers/SearchSlice';
import forms from '../reducers/FormSlice';

export const rootReducer = combineReducers({
  [marvelService.reducerPath]: marvelService.reducer,
  search,
  forms,
});

export const initStore = (preloadedState?: Partial<RootState>) =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(marvelService.middleware),
    preloadedState,
    devTools: process.env.NODE_ENV !== 'production',
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof initStore>;
export type AppDispatch = AppStore['dispatch'];

export default initStore;
