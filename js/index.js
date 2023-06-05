import { switchMode } from "./header/darkMode.js";
import { favorite } from "./header/favorite.js";
import { createCard } from "./main/topicsListing.js";
import { dataArray } from "./data.js";

switchMode();
favorite();
document.getElementById(
  "topics-number"
).innerHTML = `"${dataArray.length}" Web Topics Found`;
dataArray.map((item) => {
  createCard(item);
});
