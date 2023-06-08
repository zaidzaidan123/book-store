import { switchMode } from "../header/darkMode.js";
import { favorite } from "../header/favorite.js";
import { favoriteDisplay } from "../header/favDisplay.js";
import { detailsContent } from "./detailContent.js";

(function () {
  switchMode();
  favorite();
  favoriteDisplay();
  const url = window.location.search;
  const urlParams = new URLSearchParams(url);
  const id = urlParams.get("id");
  detailsContent(id);
})();
