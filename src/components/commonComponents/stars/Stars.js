import React from "react";
import styles from "./styles.module.css";
const Stars = ({ rate }) => {
  const starsElements = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rate)
      starsElements.push(
        <ion-icon
          name="star"
          className={styles.star}
          style={{ color: "orange" }}
          key={i}
        ></ion-icon>
      );
    else {
      starsElements.push(
        <ion-icon
          name="star-outline"
          className={styles.star + " ionicon-fill-none"}
          style={{ color: "orange" }}
          key={i}
        ></ion-icon>
      );
    }
  }
  return <section className="d-flex mt-1">{starsElements}</section>;
};

export default Stars;
