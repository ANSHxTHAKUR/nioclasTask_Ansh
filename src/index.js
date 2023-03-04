import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppProvider } from './context.js';
import {MathJaxContext} from "better-react-mathjax";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

  <AppProvider>
    <MathJaxContext>

    <App />
    </MathJaxContext>
  </AppProvider>

  </React.StrictMode>
);


