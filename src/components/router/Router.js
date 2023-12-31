import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainContent } from "../../Pages/Main/MainContent";
import DetailsPage from "../../Pages/Details/DetailsPage";
import SharedLayout from "../../sharedLayout/SharedLayout";
import UpdateBook from "../../Pages/UpdateBook/UpdateBook";
import AddBook from "../../Pages/AddBook/AddBook";
import FavoritePage from "../../Pages/FavoritePage/FavoritePage";
const LayOut = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route element={<SharedLayout />}>
          <Route exact path="/" element={<MainContent />} />
          <Route path="/details/:id" element={<DetailsPage />} />
          <Route path="update/:id" element={<UpdateBook />}></Route>
          <Route path="addBook" element={<AddBook/>}></Route>
          <Route path="favorite" element={<FavoritePage/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default LayOut;
