import { createRoot } from "react-dom/client";
import "./index.css";
import client from "./config/query-client.js";
import App from "./App.jsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={client}>
    <BrowserRouter>
      <App />
      <CssBaseline />
    </BrowserRouter>
  </QueryClientProvider>
);
