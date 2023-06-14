import React from "react";
import styles from "./styles.module.css";
const Footer = () => {
  return (
    <footer>
      <div
        className={
          "d-flex justify-content-center align-items-center " +
          styles.footer_content
        }
      >
        <p>Developed With </p>
        <ion-icon style={{ color: "red" }} name="heart"></ion-icon>
        <p>&copy; 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
