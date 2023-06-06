import { starsFill } from "../stars.js";
import { favoriteDisplay } from "../fav.js";

export const detailsContent = (id) => {
  fetch(`https://tap-web-1.herokuapp.com/topics/details/${id}`)
    .then((response) => response.json())
    .then((data) => {
      courseDetails(data);
      createFavoriteCard(data);
      createSupTopics(data.topic, data.subtopics);
    });
};
const removeText = "Remove from Favorites";
const addText = `Add to Favorites <ion-icon class=" heart-card" name="heart-outline"></ion-icon>`;
let favCards = JSON.parse(localStorage.getItem("favArray"));
const courseDetails = (data) => {
  const courseDetails = document.getElementById("course-details");
  const courseDescription = document.getElementById("course-description");
  const topicType = document.createElement("h4");
  const topic = document.createElement("h1");
  const starsContainer = document.createElement("section");

  topicType.className = "topic-type";
  topic.className = "detail-text fs-4 fw-semibold";
  starsContainer.className = "d-flex";

  topicType.innerHTML = data.category;
  topic.innerHTML = data.topic;
  starsFill(starsContainer, data.rating);
  courseDescription.innerHTML = data.description;
  courseDetails.appendChild(topicType);
  courseDetails.appendChild(topic);
  courseDetails.appendChild(starsContainer);
};
const createFavoriteCard = (data) => {
  const card = document.getElementById("card-content");
  const image = document.createElement("img");
  const cardContent = document.createElement("section");
  const contentTop = document.createElement("p");
  const contentInside = document.createElement("section");
  const insideQuestion = document.createElement("p");
  const favButton = document.createElement("button");
  const unlimited = document.createElement("p");

  image.src = `Logos/${data.image}`;
  image.className = "card-img-top rounded-0";
  image.alt = data.topic;
  cardContent.className = " d-flex flex-column p-3 gap-2";
  contentTop.className = "card-content-detail";
  contentInside.className = "fav-card";
  insideQuestion.className = "card-content-detail";
  favButton.className =
    "card-button btn rounded-0 border-0 outline-0 d-flex justify-content-around align-items-center text-white ";
  unlimited.className = "card-content-detail Credits";

  contentTop.innerHTML = `<b class="card-content-detail">${data.topic}</b> by <a href="">${data.name}</a>`;
  insideQuestion.innerHTML = "Interested about this topic?";
  favButton.innerHTML = `${
    !favCards ? addText : favCards.includes(data.id) ? removeText : addText
  }`;
  favButton.id = "fav-button-display";
  unlimited.innerHTML = "Unlimited Credits";

  card.appendChild(image);
  card.appendChild(cardContent);
  cardContent.appendChild(contentTop);
  cardContent.appendChild(contentInside);
  contentInside.appendChild(insideQuestion);
  contentInside.appendChild(favButton);
  contentInside.appendChild(unlimited);

  favButton.addEventListener("click", () => addToFav(data.id));
};

const createSupTopics = (topic, subTopicsArray) => {
  const supTopicsContainer = document.getElementById("sub-topics");
  const supTopicsHeader = document.createElement("div");
  const supTopicsH2 = document.createElement("h2");
  supTopicsContainer.appendChild(supTopicsHeader);
  supTopicsHeader.appendChild(supTopicsH2);
  supTopicsH2.innerHTML = `${topic} Sub Topics`;
  supTopicsH2.className = "fs-4 fw-semibold";

  for (let i = 0; i < subTopicsArray.length; i++) {
    const supTopicsDiv = document.createElement("div");
    const supTopicsIconContainer = document.createElement("div");
    const supTopic = document.createElement("div");

    supTopicsDiv.className = "topics_subtitles d-flex align-items-center";
    supTopicsIconContainer.innerHTML = `<ion-icon name="checkmark-circle-outline" class="icon-color"></ion-icon>`;
    supTopic.innerHTML = `<h4>${subTopicsArray[i]}</h4>`;
    supTopicsContainer.appendChild(supTopicsDiv);
    supTopicsDiv.appendChild(supTopicsIconContainer);
    supTopicsDiv.appendChild(supTopic);
  }
};

const addToFav = (id) => {
  favCards = JSON.parse(localStorage.getItem("favArray"));
  let favCardsAdd = [];
  if (!favCards) {
    favCardsAdd.push(id);
    favCards = [...favCardsAdd];
  } else if (!favCards.includes(id)) {
    favCards.push(id);
  } else {
    favCards = favCards.filter((element) => element !== id);
  }
  localStorage.setItem("favArray", JSON.stringify(favCards));
  const favButton = document.getElementById("fav-button-display");
  favButton.innerHTML = `${favCards.includes(id) ? removeText : addText}`;
  favoriteDisplay();
};
