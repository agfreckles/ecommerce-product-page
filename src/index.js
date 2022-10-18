import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./static/index.css";
import "lightgallery.js/dist/css/lightgallery.css";
import { LightgalleryProvider } from "react-lightgallery";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LightgalleryProvider>
      {" "}
      <App />
    </LightgalleryProvider>
  </React.StrictMode>
);
