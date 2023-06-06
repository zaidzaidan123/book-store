const fetchData = async () => {
  const loader = document.querySelector(".loaderwidth ");
  try {
    const response = await fetch("https://tap-web-1.herokuapp.com/topics/list");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  } finally {
    loader.style.display="none"
  }
};

export const dataArray = await fetchData();

// const fetchData = async () => {
//   try {
//     const response = await fetch("https://api.example.com/data");
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("An error occurred:", error);
//     throw error;
//   }
// };

// export const data = await fetchData();
