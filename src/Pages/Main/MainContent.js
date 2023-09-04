import React, { useEffect, useState } from "react";
import { useGetBooksQuery } from "../../api/apiSlice";
import FilterContent from "../../components/mainContent/filterContent/FilterContent";
import { useAPI } from "../../customHooks/useAPI";
import useDebounce from "../../customHooks/useDebounce";
import styles from "./styles.module.css";
import Pagination from "../../components/pagination/Pagination";
import CardsContainer from "../../components/mainContent/cards-container/CardsContainer";
import { useDispatch } from 'react-redux';
import { setBooks } from "../../store/bookSlice";
export const MainContent = () => {
  const [search, setSearch] = useState("");
  const [searchArray, setSearchArray] = useState([]);
  const {data:books,isLoading,isError}=  useGetBooksQuery(search)
  const [displayTopics, setDisplayTopics] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage, setBooksPerPage] =useState(20);
  const indexOfLastBook=currentPage *booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  console.log(books)
  const currentBooks=books?.slice(indexOfFirstBook, indexOfLastBook);

  const debouncedSearchedTerm = useDebounce(search, 300);
  const dispatch = useDispatch();



  useEffect(() => {
    // const fetchApi = async () => {
    //   try {
    //     // const response = await fetch(
    //     //   `http://localhost:3000/books?title_like=${search}&_page=1&_limit=1000`
    //     // );
    //     // const searchArray = await response.json();


    //     setSearchArray(searchArray);
    //   } catch {}
    // };
    // fetchApi();

    if (books) {
      dispatch(setBooks(books));
    }
  }, [debouncedSearchedTerm,dispatch, books]);

  // useEffect(() => {
  //   applyFilter();
  // }, [search, searchArray]);

  // const applyFilter = () => {
  //   let filteredTopics = [...books];
  //   if (search) {
  //     let searchFiltered = [...searchArray];
  //     filteredTopics = filteredTopics.filter((item) => {
  //       return searchFiltered.some((searchItem) => searchItem.id === item.id);
  //     });
  //   }
  //   setDisplayTopics(filteredTopics);
  // };
  const handleChangeSearch = (event) => {
    const selectedValue = event.target.value.toLowerCase();
    setSearch(selectedValue);
  };

  const onPageChange=(pageNumber )=>{
    setCurrentPage(pageNumber);
  }
  return (
    <>
      <main className={`px-3 px-md-5 d-flex flex-column gap-4 ${styles.main}`}>
        <FilterContent
          handleChangeSearch={handleChangeSearch}
          search={search}
        />
        <CardsContainer books={currentBooks} isLoading={isLoading} isError={isError} booksLength={books?.length} />
        <Pagination totalNumber={books?.length} currentPage={currentPage} onPageChange={onPageChange} />
      </main>
    </>
  );
};
