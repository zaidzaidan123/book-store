import React from "react";
import Search from "./Search";
import SelectFiltering from "./SelectFiltering";
import styles from "./styles.module.css";
const FilterContent = ({
  handleChangeFilter,
  handleChangeSearch,
  handleChangeSort,
  options,
  search,
}) => {
  return (
    <section
      className={styles.websites_search + "  mt-4 d-flex rounded-3 row m-0"}
    >
      <Search search={search} handleChangeSearch={handleChangeSearch} />
      <SelectFiltering
        type="Sort"
        handleChange={handleChangeSort}
        options={options}
      />
      <SelectFiltering
        type="Filter"
        handleChange={handleChangeFilter}
        options={options}
      />
    </section>
  );
};

export default FilterContent;
