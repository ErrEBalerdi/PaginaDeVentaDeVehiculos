const stars = document.querySelectorAll(".star");
const ratingValue = document.querySelector("#value");
let rating = 0;

stars.forEach(function (star) {
  star.addEventListener("click", function () {
    rating = parseInt(this.getAttribute("data-value"));
    setRating();
  });
  star.addEventListener("mouseover", function () {
    resetStars();
    const currentRating = parseInt(this.getAttribute("data-value"));
    highlightStars(currentRating);
  });
  star.addEventListener("mouseout", function () {
    resetStars();
    if (rating !== 0) {
      highlightStars(rating);
    }
  });
});

function setRating() {
  resetStars();
  for (let i = 0; i < rating; i++) {
    stars[i].classList.add("selected");
  }
  ratingValue.innerHTML = rating;
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
