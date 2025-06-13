import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import Layout from "./Layout";
import Datenschutz from "./Pages/Datenschutz";
import Fernwartung from "./Pages/Fernwartung";
import Home from "./Pages/Home";
import Impressum from "./Pages/Impressum";
import Oem from "./Pages/Oem";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Datenschutz" element={<Datenschutz />} />
          <Route path="Impressum" element={<Impressum />} />
          <Route path="Fernwartung" element={<Fernwartung />} />
          <Route path="OEM" element={<Oem />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
