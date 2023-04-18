let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

document.querySelector("#login-btn").onclick = () => {
  document.querySelector(".login-form-container").classList.toggle("active");
};

document.querySelector("#close-login-form").onclick = () => {
  document.querySelector(".login-form-container").classList.toggle("active");
};
/* Abrir modal wizard */
document.querySelector("#wizard-btn").onclick = () => {
    document.querySelector(".wizard-form-container").classList.toggle("active");
};

document.querySelector("#close-wizard-form").onclick = () => {
    document.querySelector(".wizard-form-container").classList.toggle("active");
};

/* Abrir modal wizard */

/*Modal2 wizard */
document.querySelector("#wizard-btn2").onclick = () => {
    document.querySelector(".wizard-form-container2").classList.toggle("active");
};
document.querySelector("#back").onclick = () => {
    document.querySelector(".wizard-form-container2").classList.toggle("active");
};

document.querySelector("#close-wizard-form2").onclick = () => {
    document.querySelector(".wizard-form-container").classList.toggle("active");
    document.querySelector(".wizard-form-container2").classList.toggle("active");
};
document.querySelector("#terminar").onclick = () => {
    document.querySelector(".wizard-form-container2").classList.toggle("active");
    document.querySelector(".wizard-form-container").classList.toggle("active");
};
/*Modal2 wizard */

/*Modal3 wizard */

document.querySelector("#wizard-btn3").onclick = () => {
    document.querySelector(".wizard-form-container3").classList.toggle("active");
};

document.querySelector("#close-wizard-form3").onclick = () => {
    document.querySelector(".wizard-form-container3").classList.toggle("active");
};
/*Modal3 wizard */

window.onscroll = () => {
  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }

  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

window.onload = () => {
  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
};

var swiper = new Swiper(".vehicles-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

//featured section inicio//

var swiper = new Swiper(".featured-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    768: {
      slidesPerView: 2,
    },
    991: { slidesPerView: 3 },
  },
});
//featured section fin riki//

// FormSubmit API - Envio de formularios a gmail a traves de la API FormSubmit
let submit = document.getElementById("sub-form");

submit.addEventListener("click", (e) => {
  let inputVal = e.target.form[0].value;
  e.target.form.action += inputVal;
});


