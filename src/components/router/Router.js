import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "../sharedLayout/SharedLayout";
import { MainContent } from "../mainContent/MainContent";
import DetailsPage from "../details/DetailsPage";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SharedLayout />}>
          <Route exact path="/" element={<MainContent />} />
          <Route path="/details/:id" element={<DetailsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
