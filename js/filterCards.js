import { dataArray } from "./data.js";
import { createCard } from "./main/topicsListing.js";
let editArray = [...dataArray];
const filterMenu = () => {
  let catagories = [...new Set(dataArray.map((element) => element.category))];
  const filter = document.getElementById("filter");
  catagories.map((item) => {
    const option = document.createElement("option");
    option.value = item;
    option.text = item;
    filter.appendChild(option);
  });
};

const sortMenu = () => {
  const sort = document.getElementById("sort");
  ["Topic Title", "Author Name"].map((item) => {
    const option = document.createElement("option");
    option.value = item;
    option.text = item;
    sort.appendChild(option);
  });
};

const sort = (editArray, selectSort) => {
  if (selectSort === "Topic Title") {
    return editArray.sort((a, b) => a.topic.localeCompare(b.topic));
  } else if (selectSort === "Author Name") {
    return editArray.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    return editArray;
  }
};

const filter = (editArray, selectFilter) => {
  if (selectFilter === "default") return editArray;
  return editArray.filter((element) => element.category === selectFilter);
};
const applySearchFilter = (searchValue) => {
  fetch(`https://tap-web-1.herokuapp.com/topics/list?phrase=${searchValue}`)
    .then((res) => res.json())
    .then((data) => {
      let filteredArray = filter(
        [...data],
        document.getElementById("filter").value
      );
      let sortedArray = sort(
        [...filteredArray],
        document.getElementById("sort").value
      );
      editArray = [...sortedArray];
      displayCards(editArray);
    })
    .catch(() => alert("error in search"));
};

let debounce = (callBack, time) => {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(callBack, time);
  };
};

const displayCards = (editArray) => {
  document.getElementById("cards-container").innerHTML = "";
  editArray.map((item) => {
    createCard(item);
  });
  document.getElementById(
    "topics-number"
  ).innerHTML = `"${editArray.length}" Web Topics Found`;
};
export {
  sortMenu,
  filterMenu,
  debounce,
  displayCards,
  applySearchFilter,
  sort,
  filter,
};
