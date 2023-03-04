import React from 'react';
import './styles/global.scss';
import './styles/grid.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ToastContainer } from 'react-toastify';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <Router>
    <Provider store={store}>
      <App />
      <ToastContainer position="bottom-right" />
    </Provider>
  </Router>,
);

reportWebVitals();
