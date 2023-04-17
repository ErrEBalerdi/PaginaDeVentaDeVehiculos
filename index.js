let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");
<<<<<<< HEAD

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

const checkBtn = document.querySelectorAll("#checkBtn");
const cars = document.querySelectorAll("#carNames");
for (let btn of checkBtn) {
  btn.addEventListener("click", showCar);
}

function showCar(e) {
  let chosenCar = e.target.parentElement.childNodes[3].textContent;
  console.log(chosenCar);

  vehiculos.forEach((vehiculo) => {
    if (vehiculo[chosenCar]) {
      let auto = vehiculo[[chosenCar]];
    }
  });
}

// rating system
=======
>>>>>>> parent of 3ef009b (modal y rating system)

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

const checkBtn = document.querySelectorAll("#checkBtn");
const cars = document.querySelectorAll("#carNames");
for (let btn of checkBtn) {
  btn.addEventListener("click", showCar);
}

function showCar(e) {
  let chosenCar = e.target.parentElement.childNodes[3].textContent;
  console.log(chosenCar);

  vehiculos.forEach((vehiculo) => {
    if (vehiculo[chosenCar]) {
      let auto = vehiculo[[chosenCar]];
    }
  });
}

// Pasar de modal en modal
var modales = ["#modal1", "#modal2", "#modal3"]; // Array con los IDs de los modales
var indiceActual = 0; // Índice del modal actualmente visible

function siguienteModal() {
  $(modales[indiceActual]).modal("hide"); // Ocultar el modal actual
  indiceActual = (indiceActual + 1) % modales.length; // Calcular el índice del siguiente modal
  $(modales[indiceActual]).modal("show"); // Mostrar el siguiente modal
}

$(document).ready(function () {
  // Agregar evento de clic a las estrellas
  $("#rating-stars i").click(function () {
    var rating = $(this).data("rating"); // Obtener la valoración de la estrella clickeada
    $("#rating-stars i").removeClass("fas").addClass("far"); // Resetear todas las estrellas
    for (var i = 1; i <= rating; i++) {
      $("#rating-stars i:nth-child(" + i + ")")
        .removeClass("far")
        .addClass("fas"); // Marcar las estrellas seleccionadas
    }
  });
});
