import React from 'react';
import { createRoot }  from 'react-dom/client';
import { AuthProvider } from './profile-components/AuthContext';
// import * as ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
  <React.StrictMode>
   
    <App />
   
  </React.StrictMode>
  </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
