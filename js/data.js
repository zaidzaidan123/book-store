const fetchData = async () => {
  const loader = document.querySelector(".loaderwidth ");
  try {
    const response = await fetch("https://tap-web-1.herokuapp.com/topics/list");
    const data = await response.json();
    return data;
  } catch (error) {
    document.getElementById("cards-container").innerHTML =
      "Something went wrong. Web topics failed to load.";
  } finally {
    loader.style.display = "none";
  }
};

export const dataArray = await fetchData();
