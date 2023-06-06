import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import { store } from "./redux/store";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <BrowserRouter basename="/fast-delivery_frontend">
      {/* <React.StrictMode> */}
      <Provider store={store}>
         <App />
      </Provider>
      {/* </React.StrictMode> */}
   </BrowserRouter>
);
