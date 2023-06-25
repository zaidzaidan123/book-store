import { createContext, useState } from "react";

export const HeaderContext = createContext();

export const DarkModeProvider = ({ children }) => {
  let darkData = {};
  if (localStorage.getItem("dark-toggle") === "dark-theme") {
    darkData = {
      check: false,
      text: "Light Mode",
      icon: "sunny",
    };
  } else {
    darkData = {
      check: true,
      text: "Dark Mode",
      icon: "moon",
    };
  }

  const [darkMode, setDarkMode] = useState(darkData);
  const [favoriteCards, setFavoriteCards] = useState({
    check: false,
    cards: JSON.parse(localStorage.getItem("favCards")) || [],
  });

  return (
    <HeaderContext.Provider
      value={{ darkMode, setDarkMode, favoriteCards, setFavoriteCards }}
    >
      {children}
    </HeaderContext.Provider>
  );
};
