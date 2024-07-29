import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';

// ReactDOM c'est pour attacher à notre HTML
const root = ReactDOM.createRoot (document.getElementById("root"))
// C'est dans la variable root que notre application sera affciher dans le HTML

// Ci-dessous : On importe le composant parent App.js
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,

);  

