import Home from '@pages/Home';
import List from '@pages/List';
import store from '@store/index';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee-list" element={<List />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
