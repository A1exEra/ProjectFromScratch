/* eslint-disable comma-dangle */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

console.log('God Of Code');

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
