import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { WatchListContextProvider } from './store/watchlist-context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WatchListContextProvider><App /></WatchListContextProvider>
  </React.StrictMode>
);


