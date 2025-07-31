import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";

import App from "./App.jsx";
import FallBackError from "./ui/FallBackError.jsx";

createRoot(document.getElementById("root")).render(
  <ErrorBoundary
    FallbackComponent={FallBackError}
    onReset={() => window.location.replace("/")}
  >
    <StrictMode>
      <App />
    </StrictMode>
  </ErrorBoundary>,
);
