import { switchMode } from "./header/darkMode.js";
import { favorite } from "./header/favorite.js";
import { createCard } from "./main/topicsListing.js";
import { favoriteDisplay } from "./fav.js";
import { dataArray } from "./data.js";

switchMode();
favorite();
favoriteDisplay();
document.getElementById(
  "topics-number"
).innerHTML = `"${dataArray.length}" Web Topics Found`;

let editArray = dataArray;

let selectValue = document.getElementById("sort");
console.log(selectValue);

const filterBy = () => {
  let catagories = [
    "Web Development Languages",
    "Frontend Frameworks and Libraries",
    "Backend Frameworks and Libraries",
    "Databases and APIs",
    "Web Development Concepts and Technologies",
  ];
  const filter = document.getElementById("filter");
  catagories.map((item) => {
    const option = document.createElement("option");
    option.value = item;
    option.text = item;
    filter.appendChild(option);
  });

  // let arr=dataArray.filter((element)=> element.)
};

const sortBy = () => {
  const sort = document.getElementById("sort");
  ["Topic Title", "Author Name"].map((item) => {
    const option = document.createElement("option");
    option.value = item;
    option.text = item;
    sort.appendChild(option);
  });
};
sortBy();

const authorSort = (editArray) => {
  return editArray.sort((a, b) => a.name.localeCompare(b.name));
  let TopicSorted = [...dataArray].sort((a, b) =>
    a.topic.localeCompare(b.topic)
  );
};
const topicSort = (editArray) => {
  return editArray.sort((a, b) => a.topic.localeCompare(b.topic));
};

const displayCards = (editArray) => {};
editArray.map((item) => {
  createCard(item);
});
const cardss = document.getElementById("cards-container").children;
console.log(cardss);
