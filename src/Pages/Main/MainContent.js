import React, { useEffect, useState } from "react";
import { useGetBooksQuery,useGetBooksByPageAndLimitQuery } from "../../api/apiSlice";
import FilterContent from "../../components/mainContent/filterContent/FilterContent";
import { useAPI } from "../../customHooks/useAPI";
import useDebounce from "../../customHooks/useDebounce";
import styles from "./styles.module.css";
import Pagination from "../../components/pagination/Pagination";
import CardsContainer from "../../components/mainContent/cards-container/CardsContainer";
export const MainContent = () => {
  const {data:books,isLoading,isError}=useGetBooksByPageAndLimitQuery()

  let books_total = useAPI("http://localhost:3000/books");
  const [displayTopics, setDisplayTopics] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [search, setSearch] = useState("");
  const [searchArray, setSearchArray] = useState([]);

  const debouncedSearchedTerm = useDebounce(search, 300);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/books?title_like=${search}&_page=1&_limit=1000`
        );
        const searchArray = await response.json();
        setSearchArray(searchArray);
      } catch {}
    };
    fetchApi();
  }, [debouncedSearchedTerm]);

  useEffect(() => {
    applyFilter();
  }, [search, searchArray]);

  const applyFilter = () => {
    let filteredTopics = [...books_total.post];
    if (search) {
      let searchFiltered = [...searchArray];
      filteredTopics = filteredTopics.filter((item) => {
        return searchFiltered.some((searchItem) => searchItem.id === item.id);
      });
    }
    setDisplayTopics(filteredTopics);
  };
  const handleChangeSearch = (event) => {
    const selectedValue = event.target.value.toLowerCase();
    setSearch(selectedValue);
  };
  return (
    <>
      <main className={`px-3 px-md-5 d-flex flex-column gap-4 ${styles.main}`}>
        <FilterContent
          handleChangeSearch={handleChangeSearch}
          search={search}
        />
        <h2>"{displayTopics.length}" Books Found</h2>
        <CardsContainer books={books} isLoading={isLoading} isError={isError} searchData={displayTopics} />
        <Pagination totalNumber={displayTopics.length} />
      </main>
    </>
  );
};
