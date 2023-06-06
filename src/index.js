import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

import App from "./App";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <Router>
      <React.StrictMode>
         <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
               <App />
            </PersistGate>
         </Provider>
      </React.StrictMode>
   </Router>
);
