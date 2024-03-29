import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { IngredientsContextProvider } from './context/IngredientsContext';
import { AuthContextProvider } from './context/AuthContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
        <IngredientsContextProvider>
            <App />
        </IngredientsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);