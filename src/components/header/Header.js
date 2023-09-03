import React, { useContext } from "react";
import styles from "./styles.module.css";
import Logo from "./Logo";
import { HeaderContext } from "../../context";
import { Link } from "react-router-dom";
const Header = () => {
  const { favoriteCards, setFavoriteCards } = useContext(HeaderContext);
  const handleFavDisplay = () => {
    setFavoriteCards({ ...favoriteCards, check: !favoriteCards.check });
  };
  return (
    <nav
      className={
        styles.header +
        " navbar header d-flex px-md-5 px-3 justify-content-between "
      }
    >
      <Link to={`/`} style={{ textDecoration: "none" }}>
        <Logo logo="Book Store" />
      </Link>
      <div className="d-flex align-items-center gap-2">
        <button
          className={
            styles.icon_button +
            " btn d-flex align-items-center gap-2 btn-sm icon-button"
          }
          onClick={handleFavDisplay}
        >
          <ion-icon name={"heart-outline"}></ion-icon>
          <p className="m-0 d-none d-sm-block">Favorites</p>
        </button>
      </div>
    </nav>
  );
};

export default Header;
