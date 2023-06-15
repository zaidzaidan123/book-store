import React from "react";
import Stars from "../../commonComponents/stars/Stars";
import FaintText from "./FaintText";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
const Card = ({ cardContent }) => {
  return (
    <div className="col">
      <Link to={`details/${cardContent.id}`} className={styles.card_anchor}>
        <div className={styles.card + " border-0 rounded " + styles.card_anchor}>
          <img
            src={`TopicsPictures/${cardContent.image}`}
            alt={cardContent.topic}
            className={styles.topic_image + " card-img-top rounded-top"}
          />
          <section
            className={
              "d-flex flex-column justify-content-between p-3 " +
              styles.card_content
            }
          >
            <section className={styles.card_top}>
              <section className={styles.card_type}>
                {cardContent.category}
              </section>
              <section className={styles.card_topic + " " + styles.line_order}>
                {cardContent.topic}
              </section>
            </section>

            <Stars rate={cardContent.rating} />
            <FaintText text={`Author: ${cardContent.name}`} />
          </section>
        </div>
      </Link>
    </div>
  );
};

export default Card;
