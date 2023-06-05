import { starsFill } from "../stars.js";

let cards_container = document.getElementById("cards-container");

export const createCard = (obj) => {
  const contentTopType = document.createElement("section");
  fetch(`https://tap-web-1.herokuapp.com/topics/details/${obj.id}`)
    .then((res) => res.json())
    .then((data) => (contentTopType.innerHTML = data.category))
    .catch((error) => console.log(error));
  const col = document.createElement("div");
  const card = document.createElement("a");
  const image = document.createElement("img");
  const cardContent = document.createElement("section");
  const contentTop = document.createElement("section");
  const contentTopTopic = document.createElement("section");
  const contentStars = document.createElement("section");
  const author = document.createElement("section");
  col.className = "col";
  card.className = "card border-0 card-anchor";
  image.className = "card-img-top rounded-top topic-image ";
  cardContent.className = "d-flex flex-column justify-content-between p-3 ";
  contentTop.className = "card-top";
  contentTopType.className = "card-type";
  contentTopTopic.className = "card-topic line-order";
  contentStars.className = "d-flex mt-1";
  author.className = "author";

  cards_container.appendChild(col);
  col.appendChild(card);
  card.appendChild(image);
  card.appendChild(cardContent);
  cardContent.appendChild(contentTop);
  contentTop.appendChild(contentTopType);
  contentTop.appendChild(contentTopTopic);
  cardContent.appendChild(contentStars);
  cardContent.appendChild(author);

  starsFill(contentStars, obj.rating);

  image.src = `/Logos/${obj.image}`;
  image.alt = obj.topic;
  contentTopTopic.innerHTML = obj.topic;
  author.innerHTML = obj.name;
  card.href = `details.html?id=${obj.id}`;
};
