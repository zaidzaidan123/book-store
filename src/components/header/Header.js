import React from "react";
import styles from "./styles.module.css";
import Logo from "./Logo";
import { Link } from "react-router-dom";
const Header = () => {
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
        <Link
          to="favorite"
          className={
            styles.icon_button +
            " btn d-flex align-items-center gap-2 btn-sm icon-button"
          }
        >
          {" "}
          Favorites
        </Link>
        <Link
          to="addBook"
          className={
            styles.icon_button +
            " btn d-flex align-items-center gap-2 btn-sm icon-button"
          }
        >
          Add Book
        </Link>
      </div>
    </nav>
  );
};

export default Header;
