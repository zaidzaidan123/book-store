import React from "react";
import styles from "./styles.module.css";
const Topic = ({ topic }) => {
  return (
    <div className={styles.topics_subtitles + " d-flex align-items-center"}>
      <div>
        <ion-icon
          name="checkmark-circle-outline"
          className="md hydrated"
          role="img"
          style={{ color: "green" }}
        ></ion-icon>
      </div>
      <div>
        <h4>{topic}</h4>
      </div>
    </div>
  );
};

export default Topic;
