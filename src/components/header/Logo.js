import React from "react";
import styles from "./styles.module.css";
const Logo = ({ logo }) => {
  return <h1 className={styles.logo}>{logo}</h1>;
};

export default Logo;
