import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/App';
import './style/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
