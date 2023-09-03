import React from "react";
import Search from "./Search";
import styles from "./styles.module.css";
const FilterContent = ({
  handleChangeSearch,
  search,
}) => {
  return (
    <section
      className={styles.websites_search + "  mt-4 d-flex rounded-3 row m-0"}
    >
      <Search search={search} handleChangeSearch={handleChangeSearch} />
    </section>
  );
};

export default FilterContent;
