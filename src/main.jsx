import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { blogApi } from "./services/blogApi";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <ApiProvider api={blogApi}>
    <App />
   </ApiProvider>
  </BrowserRouter>
);
