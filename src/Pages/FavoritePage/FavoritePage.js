import React from "react";
import CardsContainer from "../../components/mainContent/cards-container/CardsContainer";
import { useSelector } from "react-redux";
// import Pagination from "../../components/pagination/Pagination";
const FavoritePage = () => {
  const favorites = useSelector((state) => state.favorites);
  return (
    <div className="px-3 px-md-5 d-flex flex-column gap-4 my-4">
      <CardsContainer books={favorites} booksLength={favorites.length} />
      {/* <Pagination/> */}
    </div>
  );
};

export default FavoritePage;
