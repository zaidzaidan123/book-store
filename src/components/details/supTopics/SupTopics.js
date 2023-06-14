import React from "react";
import styles from "./styles.module.css";
import Topic from "./Topic";
const SupTopics = ({ topic, subTopics }) => {
  return (
    <section className={styles.sub_topics}>
      <div className={styles.details_container}>
        <div
          className={
            styles.topics +
            " " +
            styles.content_width +
            " " +
            styles.topics_padding
          }
        >
          <div>
            <h2 className="fs-4 fw-semibold">{topic} Sub Topics</h2>
          </div>
          <>
            {subTopics?.map((item, key) => {
              return <Topic topic={item} key={key} />;
            })}
          </>
        </div>
      </div>
    </section>
  );
};

export default SupTopics;
