import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainContent } from "../../Pages/Main/MainContent";
import DetailsPage from "../../Pages/Details/DetailsPage";
import SharedLayout from "../../sharedLayout/SharedLayout";
const LayOut = () => {
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

export default LayOut;
