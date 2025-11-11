import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { FlyMenuProvider } from './context/flyMenuContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FlyMenuProvider>
      <App />
    </FlyMenuProvider>
  </React.StrictMode>

);
