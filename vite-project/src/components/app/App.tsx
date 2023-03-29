import { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AppHeader from '../appHeader/AppHeader';
import { Home, Main, NotFound, FormPage } from '../pages';

import './App.scss';
const App = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default App;
