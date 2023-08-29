import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ErrorBoundary from "./components/services/ErrorBoundary";

import { WatchListContextProvider } from "./store/watchlist-context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
     <ErrorBoundary>
    <WatchListContextProvider>
     
        <App />
     
    </WatchListContextProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
