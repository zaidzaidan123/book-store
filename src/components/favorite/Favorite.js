import React, { useContext } from "react";
import { HeaderContext } from "../../context";
import Stars from "../commonComponents/stars/Stars";
import styles from "./styles.module.css";
const Favorite = () => {
  const { favoriteCards } = useContext(HeaderContext);
  return (
    <>
      {favoriteCards.check && (
        <div className={styles.fav + " px-3 px-md-5 w-100 pt-3 "}>
          <h3>My Favorite Topics</h3>
          <div className={styles.fav_cards + " pt-3 overflow-auto d-flex"}>
            {favoriteCards.cards.map((item) => {
              return (
                <div className={styles.favorite_card} key={item.id}>
                  <img
                    src={`../TopicsPictures/${item.image}`}
                    alt={item.topic}
                    className="rounded-top bg-white"
                  />
                  <section
                    className={styles.fav_content + " d-flex flex-column"}
                  >
                    <section
                      className={
                        styles.card_topic + " " + styles.card_topic_fav
                      }
                    >
                      {item.topic}
                    </section>
                    <Stars rate={item.rating} />
                  </section>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Favorite;
