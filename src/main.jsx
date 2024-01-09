import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import CursorProvider from "./context/CursorContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CursorProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CursorProvider>
);
