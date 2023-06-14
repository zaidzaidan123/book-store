import React from "react";
import styles from "./styles.module.css";
const Button = ({ text, icon, handleButton }) => {
  return (
    <button
      className={
        styles.icon_button +
        " btn d-flex align-items-center gap-2 btn-sm icon-button"
      }
      onClick={() => handleButton()}
    >
      <ion-icon name={icon + "-outline"}></ion-icon>
      <p className="m-0 d-none d-sm-block">{text}</p>
    </button>
  );
};

export default Button;
