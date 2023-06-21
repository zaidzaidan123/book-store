import React, { useEffect, useState } from "react";
import Loader from "../../components/commonComponents/loader/Loader";
import FilterContent from "../../components/mainContent/filterContent/FilterContent";
import Card from "../../components/mainContent/mainCard/MainCard";
import { useAPI } from "../../customHooks/useAPI";
import useDebounce from "../../customHooks/useDebounce";
import styles from "./styles.module.css";
export const MainContent = () => {
  const url = "https://tap-web-1.herokuapp.com/topics/list";
  let topicsArray = useAPI(url);
  const [displayTopics, setDisplayTopics] = useState([]);
  const [filterCategories, setFilterCategories] = useState();
  const options = { sort: ["author", "topic"], filter: filterCategories };

  const [selectedFilter, setSelectedFilter] = useState(null);
  const [selectedSort, setSelectedSort] = useState(null);
  const [search, setSearch] = useState("");
  const [searchArray, setSearchArray] = useState([]);

  const debouncedSearchedTerm = useDebounce(search,300);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch(`${url}?phrase=${search}`);
        const searchArray = await response.json();
        setSearchArray(searchArray);
      } catch {}
    };
    fetchApi();
  }, [debouncedSearchedTerm]);

  useEffect(() => {
    setDisplayTopics(topicsArray.post);
    const categoriesFilter = [];
    topicsArray.post.filter((item) => categoriesFilter.push(item.category));
    setFilterCategories([...new Set(categoriesFilter)]);
  }, [topicsArray.post]);

  useEffect(() => {
    applyFilters();
  }, [selectedFilter, selectedSort, search, searchArray]);

  const applyFilters = () => {
    let filteredTopics = [...topicsArray.post];

    if (selectedFilter) {
      filteredTopics = filteredTopics.filter((item) => {
        return item.category === selectedFilter;
      });
    }
    if (selectedSort) {
      if (selectedSort === "author") {
        filteredTopics = [...filteredTopics].sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      } else if (selectedSort === "topic") {
        filteredTopics = [...filteredTopics].sort((a, b) =>
          a.topic.localeCompare(b.topic)
        );
      }
    }
    if (search) {
      let searchFiltered = [...searchArray];
      filteredTopics = filteredTopics.filter((item) => {
        return searchFiltered.some((searchItem) => searchItem.id === item.id);
      });
    }
    setDisplayTopics(filteredTopics);
  };
  const handleChangeFilter = (event) => {
    const selectedValue = event.target.value;
    setSelectedFilter(selectedValue === "default" ? null : selectedValue);
  };
  const handleChangeSort = (event) => {
    const selectedValue = event.target.value;
    setSelectedSort(selectedValue === "default" ? null : selectedValue);
  };
  const handleChangeSearch = (event) => {
    const selectedValue = event.target.value.toLowerCase();
    setSearch(selectedValue);
  };
  if (!topicsArray.loading) {
    return <Loader />;
  }
  if (topicsArray.error) {
    return <h1>Failed to load the cards</h1>;
  }

  return (
    <>
      <main className={"px-3 px-md-5 d-flex flex-column gap-4 " + styles.main}>
        <FilterContent
          options={options}
          handleChangeFilter={handleChangeFilter}
          handleChangeSearch={handleChangeSearch}
          handleChangeSort={handleChangeSort}
          search={search}
        />
        <h2>"{displayTopics.length}" Web Topics Found</h2>
        <section className=" row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-md-3 row-cols-lg-4 row-cols-xxl-5 g-4">
          {displayTopics.map((item) => {
            return <Card cardContent={item} key={item.id} />;
          })}
        </section>
      </main>
    </>
  );
};
