import React from "react";
import styles from "./styles.module.css";
const SelectFiltering = ({ type }) => {
  return (
    <section
      className={`col p-2 ${styles.border_search} ${
        type === "Sort" ? styles.left_border : " "
      }`}
    >
      <p>{type} By:</p>
      <select
        name={type.toLowerCase()}
        id={type.toLowerCase()}
        className={styles.select_group + " border-0 w-100 "}
      >
        <option value="default">Default</option>
      </select>
    </section>
  );
};

export default SelectFiltering;
