import React from "react";
import Stars from "../commonComponents/stars/Stars";
import styles from "./styles.module.css";
const Favorite = ({favDisplay}) => {
    console.log(favDisplay)
  return (
    <>
      {favDisplay && (
        <div className={styles.fav + " px-3 px-md-5 w-100 pt-3 "}>
          <h3>My Favorite Topics</h3>
          <div className={styles.fav_cards + " pt-3 overflow-auto d-flex"}>
            <div className={styles.favorite_card}>
              <img
                src={`/TopicsPictures/angular.png`}
                alt="Angular"
                className="rounded-top bg-white"
              />
              <section className={styles.fav_content + " d-flex flex-column"}>
                <section
                  className={styles.card_topic + " " + styles.card_topic_fav}
                >
                  Angular
                </section>
                <Stars rate={4} />
              </section>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Favorite;
