import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToFav, removeFromFav } from "../../../store/favSlice";
const Card = ({ cardContent }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  const handleAddRemoveFromFav = () => {
    if (favorites.find((item) => item.id === cardContent?.id)) {
      dispatch(removeFromFav(cardContent));
    } else {
      dispatch(addToFav(cardContent));
    }
  };
  return (
    <div className="col">
      <div className={`${styles.card} border-0 rounded ${styles.card_anchor}`}>
        <img
          src={cardContent?.thumbnail}
          alt={cardContent?.title}
          className={`${styles.topic_image} card-img-top rounded-top`}
        />
        <section
          className={
            "d-flex flex-column justify-content-between p-3 " +
            styles.card_content
          }
        >
          <section className={styles.card_top}>
            <section
              className={`mb-1 d-flex justify-content-between align-items-center`}
            >
              <p className={`${styles.card_topic} w-75`}>
                {cardContent?.title}
              </p>
              <button
                className="border-0 bg-transparent d-flex"
                onClick={handleAddRemoveFromFav}
              >
                {favorites.find((item) => item.id === cardContent?.id) ? (
                  <ion-icon name="heart"></ion-icon>
                ) : (
                  <ion-icon name="heart-outline"></ion-icon>
                )}
              </button>
            </section>
            <section
              className={`${styles.line_order} ${styles.card_tag} d-flex`}
            >
              <p className="w-100">
                {cardContent?.tags?.map((item, index) => {
                  if (index < 5) {
                    return " #" + item + " ";
                  }
                  return null;
                })}
              </p>
            </section>
            <section className="d-flex">
              <section className="w-100">
                <Link
                  to={`/details/${cardContent?.id}`}
                  className={`${styles.card_anchor}`}
                >
                  <button type="button" class="btn btn-primary w-100">
                    Show Full Details
                  </button>
                </Link>
              </section>
            </section>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Card;
