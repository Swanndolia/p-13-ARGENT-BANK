import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './utils/store.js';
import { BrowserRouter } from "react-router-dom";
import Router from "./pages/router.js"
const container = document.getElementById('root');
const root = createRoot(container);


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Router></Router>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
