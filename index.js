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

let swiper1 = new Swiper(".vehicles-slider", {
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

let swiper2 = new Swiper(".featured-slider", {
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

// Catalogo de Vehiculos //

const vehiculos = [
  {
    "Ford Fiesta": {
      puertas: 5,
      modelo: 2023,
      potencia: 198,
      motor: 1.1,
      aceleracion: "0 a 100km/h en 6,7 segundos",
      baul: 293,
      asientos: 5,
      consumo: "5 - 7.1 l/100km",
      precio: "20.000",
    },
  },
  {
    "Toyota-Camry": {
      puertas: 4,
      modelo: 2023,
      potencia: 218,
      motor: 2.5,
      aceleracion: "0 a 100km/h en 8,3 segundos",
      baul: 524,
      asientos: 5,
      consumo: "5.3 l/100km",
      precio: "42.600",
    },
  },
  {
    "Volkswagen-Gol Trend": {
      puertas: 3,
      modelo: 2022,
      potencia: 110,
      motor: 1.6,
      aceleracion: "0 a 100km/h en 10,1 segundos",
      baul: 285,
      asientos: 5,
      consumo: "6.2 l/100km",
      precio: "12.500",
    },
  },
  {
    "Toyota-Corolla": {
      puertas: 5,
      modelo: 2023,
      potencia: 196,
      motor: 2.0,
      aceleracion: "0 a 100km/h en 7,2 segundos",
      baul: 361,
      asientos: 5,
      consumo: "4.5 - 5.2 l/100km",
      precio: "24.000",
    },
  },
  {
    "Volkswagen-Passat": {
      puertas: 4,
      modelo: 2023,
      potencia: 190,
      motor: 2.0,
      aceleracion: "0 a 100km/h en 7,3 segundos",
      baul: 586,
      asientos: 5,
      consumo: "4.7 - 6.9 l/100km",
      precio: "31.900",
    },
  },
  {
    "Ford-Ecosport": {
      puertas: 5,
      modelo: 2023,
      potencia: 123,
      motor: 1.5,
      aceleracion: "0 a 100km/h en 9,7 segundos",
      baul: 355,
      asientos: 5,
      consumo: "5.9 - 6 l/100km",
      precio: "21.800",
    },
  },
  {
    "Fiat 500": {
      puertas: 3,
      modelo: 2023,
      potencia: 70,
      motor: 1.2,
      aceleracion: "0 a 100 km/h en 7 segundos",
      baul: 185,
      asientos: 4,
      consumo: "4.6 - 5.4 l/100km",
      precio: "14.500",
    },
  },
  {
    "Chevrolet-Cruze": {
      puertas: 4,
      modelo: 2023,
      potencia: 150,
      motor: 1.4,
      aceleracion: "0 a 100 km/h en 8,5 segundos",
      baul: 440,
      asientos: 5,
      consumo: "5.3 - 7.3 l/100km",
      precio: "16.300",
    },
  },
];

// form validator
const form = $("#contact-form");
const nameInput = $("#name");
const emailInput = $("#email");
const phoneInput = $("#phone");
const messageInput = $("#message");
const submitBtn = $("#btn-submit");

// previene al form de hacer enviar el formulario
$("#contact-form").submit(function (event) {
  // prevent the default form submission
  event.preventDefault();
});

submitBtn.click(function () {
  const nameValue = nameInput.val();
  const emailValue = emailInput.val();
  const phoneValue = phoneInput.val();
  const messageValue = messageInput.val();

  if (!nameValue.match(/^[a-zA-ZáéíóúñÑÁÉÍÓÚ]{5,}$/)) {
    nameInput.css("outline", "1px solid red");
    nameInput.focus();
  } else nameInput.css("outline", "1px solid green");

  if (
    !emailValue.match(
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    )
  ) {
    emailInput.css("outline", "1px solid red");
    emailInput.focus();
  } else emailInput.css("outline", "1px solid green");

  if (phoneValue == "" && !phoneValue.match(/^\d{7,14}$/)) {
    phoneInput.css("outline", "1px solid red");
    phoneInput.focus();
  } else phoneInput.css("outline", "1px solid green");

  if (messageValue.length < 8) {
    messageInput.css("outline", "1px solid red");
    messageInput.focus();
  } else {
    messageInput.css("outline", "1px solid green");
  }

  // si todas las validaicones pasan se envia el form
  form.submit();
});
