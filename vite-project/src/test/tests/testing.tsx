import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';

import { rootReducer } from '../../store/store';
import { configureStore } from '@reduxjs/toolkit';
import { marvelService } from '../../services/MarvelService';

const AllTheProviders: FC<{ children: React.ReactNode }> = ({ children }) => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(marvelService.middleware),
    devTools: process.env.NODE_ENV !== 'production',
  });
  return <Provider store={store}>{children}</Provider>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) => {
  return render(ui, { wrapper: AllTheProviders, ...options });
};

export * from '@testing-library/react';
export { customRender as render };
