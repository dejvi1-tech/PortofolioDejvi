import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";
import { ThemeProvider } from "../context/ThemeContext";
import { LanguageProvider } from "../context/LanguageContext";
import { AppsPage } from "./AppsPage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <AppsPage />
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>
);
