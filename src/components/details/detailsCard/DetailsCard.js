import React from "react";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addToFav, removeFromFav } from "../../../store/favSlice";
const DetailsCard = ({cardContent }) => {
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
    <section className={"rounded-0 " + styles.card}>
      <div className={styles.card_content}>
        <img src={cardContent?.thumbnail} alt={cardContent?.title} className="card-img-top rounded-0" />
        <section className=" d-flex flex-column p-3 gap-2">
          <p className={styles.card_content_detail}>
            <b className={styles.card_content_detail}>{cardContent?.title}</b> by{" "}
            <a href="">{cardContent?.publisher}</a>
          </p>
          <section className={styles.fav_card}>
            <p className={styles.card_content_detail}>
              Interested about this Book?{" "}
            </p>
            <button
              className={
                styles.card_button +
                " btn rounded-0 border-0 outline-0 d-flex justify-content-around align-items-center text-white "
              }
              onClick={handleAddRemoveFromFav}
            >
              {favorites.find((item) => item.id === cardContent?.id)
                ? "Remove From Favorites"
                : "Add to Favorites "}
            </button>
            <p className={styles.card_content_detail + " " + styles.Credits}>
              Unlimited Credits
            </p>
          </section>
        </section>
      </div>
    </section>
  );
};

export default DetailsCard;
