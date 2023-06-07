import { switchMode } from "./header/darkMode.js";
import { favorite } from "./header/favorite.js";
import { favoriteDisplay } from "./fav.js";
import { dataArray } from "./data.js";
import {
  sortMenu,
  filterMenu,
  debounce,
  displayCards,
  applySearchFilter,
  sort,
  filter,
} from "./filterCards.js";

(function () {
  switchMode();
  favorite();
  favoriteDisplay();
  sortMenu();
  filterMenu();
  displayCards(dataArray);
})();
let editArray = [...dataArray];
let search = document.getElementById("searchInput");
let selectSort = document.getElementById("sort");
let selectFilter = document.getElementById("filter");

search.addEventListener("input", (e) => {
  let searchValue = e.target.value.toLowerCase();
  debounce(applySearchFilter(searchValue), 300);
});

selectSort.addEventListener("change", () => {
  let selectedValue = selectSort.value;
  let filteredArray = filter([...dataArray], selectFilter.value);
  editArray = sort([...filteredArray], selectedValue);
  displayCards(editArray);
});

selectFilter.addEventListener("change", () => {
  let selectedValue = selectFilter.value;
  editArray = filter([...dataArray], selectedValue);
  displayCards(editArray);
});
