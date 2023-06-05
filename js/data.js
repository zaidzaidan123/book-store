const fetchData = async () => {
  const response = await fetch("https://tap-web-1.herokuapp.com/topics/list");
  const data = await response.json();
  return data;
};

export const dataArray = await fetchData();
