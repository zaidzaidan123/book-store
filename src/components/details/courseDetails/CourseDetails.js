import React from "react";
import Stars from "../../commonComponents/stars/Stars";
import styles from "./styles.module.css";
const CourseDetails = ({ type, rate, topic, description }) => {
  return (
    <section
      className={"d-flex flex-column gap-4 py-3 " + styles.content_width}
    >
      <section>
        <h4 className={styles.topic_type}>{type}</h4>
        <h1 className={styles.detail_text +" fs-4 fw-semibold"}>{topic}</h1>
        <Stars rate={rate} />
      </section>
      <section className={styles.detail_text}>{description}</section>
    </section>
  );
};

export default CourseDetails;
