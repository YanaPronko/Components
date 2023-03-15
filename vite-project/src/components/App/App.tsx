import { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AppHeader from '../AppHeader/AppHeader';
import { Home, Main, NotFound } from '../pages';
// import reactLogo from './assets/react.svg'
import './App.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <AppHeader />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="main" element={<Main />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
