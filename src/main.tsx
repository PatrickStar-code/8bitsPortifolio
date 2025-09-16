import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./pages/App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error404Page from "./pages/Error404Page.tsx";
import PortifolioPage from "./pages/PortifolioPage.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<Error404Page />} />
      <Route path="/" element={<App />} />

      <Route path="/portifolio" element={<PortifolioPage />} />
    </Routes>
  </BrowserRouter>
);
