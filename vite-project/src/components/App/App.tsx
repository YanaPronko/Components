import { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Main, NotFound } from '../pages';
// import reactLogo from './assets/react.svg'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="main" element={<Main />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
