import React, { useState } from "react";
import { useGetBooksQuery } from "../../api/apiSlice";
import FilterContent from "../../components/mainContent/filterContent/FilterContent";
import useDebounce from "../../customHooks/useDebounce";
import styles from "./styles.module.css";
import Pagination from "../../components/pagination/Pagination";
import CardsContainer from "../../components/mainContent/cards-container/CardsContainer";

export const MainContent = () => {
  const [search, setSearch] = useState("");
  const debouncedSearchedTerm = useDebounce(search, 300);
  const {
    data: books,
    isLoading,
    isError,
  } = useGetBooksQuery(debouncedSearchedTerm);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(20);
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books?.slice(indexOfFirstBook, indexOfLastBook);

  const handleChangeSearch = (event) => {
    const selectedValue = event.target.value.toLowerCase();
    setSearch(selectedValue);
  };

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <main className={`px-3 px-md-5 d-flex flex-column gap-4 ${styles.main}`}>
        <FilterContent
          handleChangeSearch={handleChangeSearch}
          search={search}
        />
        <CardsContainer
          books={currentBooks}
          isLoading={isLoading}
          isError={isError}
          booksLength={books?.length}
        />
        <Pagination
          totalNumber={books?.length}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      </main>
    </>
  );
};
