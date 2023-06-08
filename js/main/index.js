import { switchMode } from "../header/darkMode.js";
import { favorite } from "../header/favorite.js";
import { favoriteDisplay } from "../header/favDisplay.js";
import { dataArray } from "../data.js";
import {
  sortMenu,
  filterMenu,
  debounce,
  displayCards,
  applySearchFilter,
} from "./filterCards.js";

(function () {
  switchMode();
  favorite();
  favoriteDisplay();
  sortMenu();
  filterMenu();
  displayCards(dataArray);
})();
let search = document.getElementById("searchInput");
let selectSort = document.getElementById("sort");
let selectFilter = document.getElementById("filter");

search.addEventListener("input", (e) => {
  let searchValue = e.target.value.toLowerCase();
  debounce(applySearchFilter(searchValue), 300);
});

selectSort.addEventListener("change", () => {
  debounce(applySearchFilter(search.value), 300);
});

selectFilter.addEventListener("change", () => {
  debounce(applySearchFilter(search.value), 300);
});
