import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/app.tsx";
import "./core/index.css";
import "./core/lib/i18next/index.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
