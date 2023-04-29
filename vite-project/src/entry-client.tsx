import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/app/App';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style.scss';
import initStore, { RootState } from './store/store';

declare global {
  interface Window {
    __PRELOADED_STATE__?: Partial<RootState>;
  }
}

const store = initStore(window.__PRELOADED_STATE__);

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
delete window.__PRELOADED_STATE__;
