import React from "react";
import styles from "./styles.module.css";
const DetailsCard = ({ image, topic, name, id }) => {
  
  return (
    <section className={"rounded-0 " + styles.card}>
      <div className={styles.card_content}>
        <img src={image} alt={topic} className="card-img-top rounded-0" />
        <section className=" d-flex flex-column p-3 gap-2">
          <p className={styles.card_content_detail}>
            <b className={styles.card_content_detail}>{topic}</b> by{" "}
            <a href="">{name}</a>
          </p>
          <section className={styles.fav_card}>
            <p className={styles.card_content_detail}>
              Interested about this Book?{" "}
            </p>
            {/* <button
              className={
                styles.card_button +
                " btn rounded-0 border-0 outline-0 d-flex justify-content-around align-items-center text-white "
              }
              onClick={handleAddingToFavorites}
            >
              {favoriteCards.cards.some((item) => {
                return item.id === id;
              }) ? (
                "Remove From Favorites"
              ) : (
                <>Add to Favorites </>
              )}
            </button> */}
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
