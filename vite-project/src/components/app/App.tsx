import { Route, Routes } from 'react-router-dom';
import AppHeader from '../appHeader/AppHeader';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import { FormPage, Home, Main, NotFound } from '../pages';
import './App.scss';

const App = () => {
  return (
    <ErrorBoundary>
      <div className="app">
        <AppHeader />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/main" element={<Main />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/form" element={<FormPage />} />
          </Routes>
        </main>
      </div>
    </ErrorBoundary>
  );
};

export default App;
