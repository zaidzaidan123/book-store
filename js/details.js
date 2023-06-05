import { switchMode } from "./header/darkMode.js";
import { favorite } from "./header/favorite.js";
import { detailsContent } from "./details/detailContent.js";

switchMode();
favorite();

const url = window.location.search;
const urlParams = new URLSearchParams(url);
const id = urlParams.get("id");
detailsContent(id);
