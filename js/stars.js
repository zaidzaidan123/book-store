export const starsFill = (contentStars, rating) => {
  let starFill = `<ion-icon name="star" class="star"></ion-icon>`;
  let starEmpty = `<ion-icon name="star-outline" class="star ionicon-fill-none"></ion-icon>`;
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) contentStars.innerHTML += starFill;
    else contentStars.innerHTML += starEmpty;
  }
};
