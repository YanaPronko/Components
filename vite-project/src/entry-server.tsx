import React from 'react';
import ReactDOMServer, { RenderToPipeableStreamOptions } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';

import App from './components/app/App';
import initStore from './store/store';
import { marvelService } from './services/MarvelService';

export async function render(url: string, opts: RenderToPipeableStreamOptions) {
  const store = initStore();
  store.dispatch(marvelService.endpoints.fetchAllChars.initiate(''));
  await Promise.all(store.dispatch(marvelService.util.getRunningQueriesThunk()));

  return [
    ReactDOMServer.renderToPipeableStream(
      <React.StrictMode>
        <Provider store={store}>
          <StaticRouter location={url}>
            <App />
          </StaticRouter>
        </Provider>
      </React.StrictMode>,
      opts
    ),
    store.getState(),
  ];
}
