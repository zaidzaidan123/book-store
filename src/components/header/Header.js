import React, { useCallback, useContext } from "react";
import styles from "./styles.module.css";
import Logo from "./Logo";
import Button from "./Button";
import { HeaderContext } from "../../context";
const Header = () => {
  const { darkMode, setDarkMode, favoriteCards, setFavoriteCards } =
    useContext(HeaderContext);
  document.body.className =
    localStorage.getItem("dark-toggle") || "light-theme";
  const handleDarkButton = useCallback(() => {
    if (darkMode.check) {
      setDarkMode({
        check: false,
        text: "Light Mode",
        icon: "sunny",
      });
      document.body.className = localStorage.getItem("dark-toggle");
      localStorage.setItem("dark-toggle", "dark-theme");
    } else {
      setDarkMode({
        check: true,
        text: "Dark Mode",
        icon: "moon",
      });
      document.body.className = localStorage.getItem("dark-toggle");
      localStorage.setItem("dark-toggle", "light-theme");
    }
  }, [darkMode, setDarkMode]);
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
      <Logo logo="Web Topics" />
      <div className="d-flex align-items-center gap-2">
        <Button
          text={darkMode.text}
          icon={darkMode.icon}
          handleButton={handleDarkButton}
        />
        <Button text="Favorites" icon="heart" handleButton={handleFavDisplay} />
      </div>
    </nav>
  );
};

export default Header;
