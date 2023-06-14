import React from "react";
import styles from "./styles.module.css"
const FaintText = ({ text }) => {
  return <section className={styles.author}>{text}</section>;
};

export default FaintText;
