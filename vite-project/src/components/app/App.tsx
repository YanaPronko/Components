import { Route, Routes } from 'react-router-dom';
import AppHeader from '../appHeader/AppHeader';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import { lazy, Suspense } from 'react';

import './App.scss';
import Spinner from '../spinner/Spinner';

const Home = lazy(() => import('../pages/Home'));
const Main = lazy(() => import('../pages/Main'));
const NotFound = lazy(() => import('../pages/NotFound'));
const FormPage = lazy(() => import('../pages/FormPage'));

const App = () => {
  return (
    <ErrorBoundary>
      <div className="app">
        <AppHeader />
        <main>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/main" element={<Main />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/form" element={<FormPage />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </ErrorBoundary>
  );
};

export default App;
