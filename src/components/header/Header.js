import React, { useState } from "react";
import styles from "./styles.module.css";
import Logo from "./Logo";
import Button from "./Button";
const Header = ({ favDisplay, setFavDisplay }) => {
  const [darkButton, setDarkButton] = useState({
    check: true,
    text: "Dark Mode",
    icon: "moon",
  });
  const handleButton = () => {
    if (darkButton.check) {
      setDarkButton({
        check: false,
        text: "Light Mode",
        icon: "sunny",
      });
      document.body.className = "dark-theme";
    } else {
      setDarkButton({
        check: true,
        text: "Dark Mode",
        icon: "moon",
      });
      document.body.className = "light-theme";
    }
  };
  const handleFavDisplay = () => {
    setFavDisplay(!favDisplay);
  };
  return (
    <nav
      className={
        styles.header +
        " navbar header d-flex px-md-5 px-3 justify-content-between "
      }
    >
      <Logo logo="Web Topics" />
      <div className="d-flex align-items-center gap-2">
        <Button
          text={darkButton.text}
          icon={darkButton.icon}
          handleButton={handleButton}
        />
        <Button text="Favorites" icon="heart" handleButton={handleFavDisplay} />
      </div>
    </nav>
  );
};

export default Header;
