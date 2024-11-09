// import { useDispatch, useSelector } from "react-redux";
// import { lazy, Suspense } from "react";

// const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));

import AppBar from "../AppBar/AppBar";
import HomePage from "../../pages/HomePage/HomePage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import css from "../App/App.module.css";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import Layout from "../Layout/Layout";
import CatalogPage from "../../pages/CatalogPage/CatalogPage";
import TruckPage from "../../pages/TruckPage/TruckPage";

export default function App() {
  return (
    <div className={css.container}>
      <AppBar />
      <Suspense fallback={<div>Loading page code...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<TruckPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
