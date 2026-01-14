import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ToastProvider } from "./providers/toast.tsx";
import { ThemeSync } from "./providers/theme-sync.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <ToastProvider>
                <ThemeSync />
                <App />
            </ToastProvider>
        </BrowserRouter>
    </StrictMode>,
);
