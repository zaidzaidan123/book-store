export const favorite = () => {
  let fav = document.getElementById("fav-button");
  document.getElementById("fav").style.display = "none";
  fav.onclick = () => {
    if (document.getElementById("fav").style.display === "none") {
      document.getElementById("fav").style.display = "block";
    } else {
      document.getElementById("fav").style.display = "none";
    }
  };
};

