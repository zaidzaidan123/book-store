import React from "react";
import Search from "./Search";
import SelectFiltering from "./SelectFiltering";
import styles from "./styles.module.css";
const FilterContent = () => {
  return (
    <section
      className={styles.websites_search + "  mt-4 d-flex rounded-3 row m-0"}
    >
      <Search />
      <SelectFiltering type="Sort" />
      <SelectFiltering type="Filter" />
    </section>
  );
};

export default FilterContent;
