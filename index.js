// rating system

const stars = document.querySelectorAll(".star");
const ratingValue = document.querySelector("#value");

let valueRate = 0;

let rating = {
  1: "Segui participando",
  2: "Meh",
  3: "Algo hicieron bien",
  4: "Buenardo",
  5: "Rey de reyes",
};
stars.forEach(function (star) {
  star.addEventListener("click", function () {
    valueRate = parseInt(this.getAttribute("data-value"));
    setRating();
  });
  star.addEventListener("mouseover", function () {
    resetStars();
    const currentRating = parseInt(this.getAttribute("data-value"));
    highlightStars(currentRating);
  });
  star.addEventListener("mouseout", function () {
    resetStars();
    if (valueRate !== 0) {
      highlightStars(valueRate);
    }
  });
});

function setRating() {
  resetStars();
  for (let i = 0; i < rating; i++) {
    stars[i].classList.add("selected");
  }
  ratingValue.innerHTML = rating[valueRate];
}

function resetStars() {
  stars.forEach(function (star) {
    star.classList.remove("selected");
  });
}

function highlightStars(rating) {
  for (let i = 0; i < rating; i++) {
    stars[i].classList.add("selected");
  }
}
