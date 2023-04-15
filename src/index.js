import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {AuthProvider} from './context/AuthProvider'

const root = ReactDOM.createRoot(document.getElementById('root'));
//Je veux que tout ce qu'il y a dans APP ait accès à l'AuthProvider, c'est le seul changement dont j'aurai besoin dans index.js, pour le moment
root.render(
  <React.StrictMode>
      <AuthProvider>
        <App />
      </AuthProvider>
  </React.StrictMode>
);

