import React from "react";
import styles from "./styles.module.css";
import EditDelete from "../editDelete/EditDelete";
const CourseDetails = ({ type, topic, description, id }) => {
  return (
    <section
      className={"d-flex flex-column gap-4 py-3 " + styles.content_width}
    >
      <section>
        <h4 className={styles.topic_type}>ISBN: {type}</h4>
        <h1 className={styles.detail_text + " fs-4 fw-semibold"}>{topic}</h1>
      </section>
      <section className={styles.detail_text}>{description}</section>
      <EditDelete id={id} />
    </section>
  );
};

export default CourseDetails;
