import { dataArray } from "../data.js";
import { starsFill } from "../stars.js";

export const favoriteDisplay = () => {
  let favArray = JSON.parse(localStorage.getItem("favArray"));
  const favorites = document.getElementById("favorites");
  favorites.innerHTML = "";
  if (!favArray) {
    favorites.innerHTML = "There is no Cards Here Go add some!";
  } else {
    favArray.map((item) => {
      let information = dataArray[item - 1];
      const card = document.createElement("div");
      const image = document.createElement("img");
      const favContent = document.createElement("section");
      const topic = document.createElement("section");
      const starsContainer = document.createElement("section");

      card.className = "favorite-card";
      image.src = `Logos/${information.image}`;
      image.alt = `${information.topic}`;
      image.className = "rounded-top bg-white";
      favContent.className = "fav-content d-flex flex-column";
      topic.className = "card-topic card-topic-fav";
      starsContainer.className = "d-flex";

      topic.innerHTML = `${information.topic}`;

      favorites.appendChild(card);
      card.appendChild(image);
      card.appendChild(favContent);
      favContent.appendChild(topic);
      favContent.appendChild(starsContainer);
      starsFill(starsContainer, information.rating);
    });
  }
};
