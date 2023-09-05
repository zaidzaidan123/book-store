import React from "react";
import Card from "../mainCard/MainCard";
import Loader from "../../commonComponents/loader/Loader";

const CardsContainer = ({ books, isLoading, isError,booksLength }) => {
  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <h1>Failed to load the Books</h1>;
  }
  return (
    <>
      {" "}
      <h2>"{booksLength}" Books Found</h2>
      <section className=" row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-md-3 row-cols-lg-4 row-cols-xxl-5 g-4">
        {books?.map((item) => {
          return <Card cardContent={item} key={item.id} />;
        })}
      </section>
    </>
  );
};

export default CardsContainer;
