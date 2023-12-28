import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 厳格なモードwarningを表示する役割
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

