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
let Puertas = document.getElementById("Puertas")
let Modelo = document.getElementById("Modelo")
let Potencia = document.getElementById("Potencia")
let Motor = document.getElementById("Motor")
let Aceleracion = document.getElementById("Aceleracion")
let Baul = document.getElementById("Baul")
let Asientos = document.getElementById("Asientos")
let Consumo = document.getElementById("Consumo")
let Precio = document.getElementById("Precio")
let FotoAuto = document.getElementById("FotoAuto")
let NombreVehiculo = document.getElementById("NombreVehiculo")

document.querySelector("#VolkswagenGolTrend").onclick = () => {
  Puertas.textContent = "Puertas:" + " 3.";
  Modelo.textContent = "Modelo:" + " 2022.";
  Potencia.textContent = "Potencia:" + " 110.";
  Motor.textContent = "Motor:" + " 1.6.";
  Aceleracion.textContent = "Aceleracion:" + " 0 a 100km/h en 10,1 segundos.";
  Baul.textContent = "Baul:" + " 285.";
  Asientos.textContent = "Asientos:" + " 5.";
  Consumo.textContent = "Consumo:" + " 6.2 l/100km.";
  Precio.textContent = "Precio:" + " $7,500.";
  FotoAuto.src = "https://i.gyazo.com/828bd95be3a1a1cc15355fcc877e22e5.png"
  NombreVehiculo.textContent = "Volkswagen Gol Trend";
  document.querySelector(".info-container").classList.toggle("active");
};

document.querySelector("#ToyotaCorolla").onclick = () => {
  Puertas.textContent = "Puertas:" + " 5.";
  Modelo.textContent = "Modelo:" + " 2023.";
  Potencia.textContent = "Potencia:" + " 196.";
  Motor.textContent = "Motor:" + " 2.0.";
  Aceleracion.textContent = "Aceleracion:" + " 0 a 100km/h en 7,2 segundos.";
  Baul.textContent = "Baul:" + " 361.";
  Asientos.textContent = "Asientos:" + " 5.";
  Consumo.textContent = "Consumo:" + " 4.5 - 5.2 l/100km";
  Precio.textContent = "Precio:" + " $26,990.";
  FotoAuto.src = "https://i.gyazo.com/7736b46ef5f54195366fe56d4edf8bca.png"
  NombreVehiculo.textContent = "Toyota Corolla";
  document.querySelector(".info-container").classList.toggle("active");
};

document.querySelector("#VolkswagenPassat").onclick = () => {
  Puertas.textContent = "Puertas:" + " 4.";
  Modelo.textContent = "Modelo:" + " 2023.";
  Potencia.textContent = "Potencia:" + " 190.";
  Motor.textContent = "Motor:" + " 2.0.";
  Aceleracion.textContent = "Aceleracion:" + " 0 a 100km/h en 7,3 segundos.";
  Baul.textContent = "Baul:" + " 586.";
  Asientos.textContent = "Asientos:" + " 5.";
  Consumo.textContent = "Consumo:" + " 4.7 - 6.9 l/100km";
  Precio.textContent = "Precio:" + " $35.900.";
  FotoAuto.src = "https://i.gyazo.com/a82023ed9d892733c161b69557cbf0f1.png"
  NombreVehiculo.textContent = "Volkswagen Passat";
  document.querySelector(".info-container").classList.toggle("active");
};

document.querySelector("#FordEcosport").onclick = () => {
  Puertas.textContent = "Puertas:" + " 5.";
  Modelo.textContent = "Modelo:" + " 2023.";
  Potencia.textContent = "Potencia:" + " 123.";
  Motor.textContent = "Motor:" + " 1.5.";
  Aceleracion.textContent = "Aceleracion:" + " 0 a 100km/h en 9,7 segundos";
  Baul.textContent = "Baul:" + " 355.";
  Asientos.textContent = "Asientos:" + " 5.";
  Consumo.textContent = "Consumo:" + " 5.9 - 6 l/100km";
  Precio.textContent = "Precio:" + " $12,500.";
  FotoAuto.src = "https://i.gyazo.com/9956ac84b7ee2af08f9130047be1774a.png"
  NombreVehiculo.textContent = "Ford Ecosport";
  document.querySelector(".info-container").classList.toggle("active");
};

document.querySelector("#Fiat500").onclick = () => {
  Puertas.textContent = "Puertas:" + " 3.";
  Modelo.textContent = "Modelo:" + " 2023.";
  Potencia.textContent = "Potencia:" + " 70.";
  Motor.textContent = "Motor:" + " 1.2.";
  Aceleracion.textContent = "Aceleracion:" + " 0 a 100 km/h en 7 segundos";
  Baul.textContent = "Baul:" + " 185.";
  Asientos.textContent = "Asientos:" + " 4.";
  Consumo.textContent = "Consumo:" + " 4.6 - 5.4 l/100km";
  Precio.textContent = "Precio:" + " $17,000.";
  FotoAuto.src = "https://i.gyazo.com/54fdcedb00de7711eb534869e010df65.png"
  NombreVehiculo.textContent = "Fiat 500";
  document.querySelector(".info-container").classList.toggle("active");
};

document.querySelector("#ChevroletCruze").onclick = () => {
  Puertas.textContent = "Puertas:" + " 4.";
  Modelo.textContent = "Modelo:" + " 2023.";
  Potencia.textContent = "Potencia:" + " 150.";
  Motor.textContent = "Motor:" + " 1.4.";
  Aceleracion.textContent = "Aceleracion:" + " 0 a 100 km/h en 8,5 segundos";
  Baul.textContent = "Baul:" + " 440.";
  Asientos.textContent = "Asientos:" + " 5.";
  Consumo.textContent = "Consumo:" + " 5.3 - 7.3 l/100km";
  Precio.textContent = "Precio:" + " $25,000.";
  FotoAuto.src = "https://i.gyazo.com/7f52d741883b652e52a8a00f0cacf95e.png"
  NombreVehiculo.textContent = "Chevrolet Cruze";
  document.querySelector(".info-container").classList.toggle("active");
};

document.querySelector("#FordFiesta").onclick = () => {
  Puertas.textContent = "Puertas:" + " 5.";
  Modelo.textContent = "Modelo:" + " 2023.";
  Potencia.textContent = "Potencia:" + " 198.";
  Motor.textContent = "Motor:" + " 1.1.";
  Aceleracion.textContent = "Aceleracion:" + " 0 a 100km/h en 6,7 segundos";
  Baul.textContent = "Baul:" + " 293.";
  Asientos.textContent = "Asientos:" + " 5.";
  Consumo.textContent = "Consumo:" + " 5 - 7.1 l/100km";
  Precio.textContent = "Precio:" + " $12,500.";
  FotoAuto.src = "https://i.gyazo.com/6fd7e508e2d2daf960ba54439abe5cef.png"
  NombreVehiculo.textContent = "Ford Fiesta";
  document.querySelector(".info-container").classList.toggle("active");
};

document.querySelector("#ToyotaCamry").onclick = () => {
  Puertas.textContent = "Puertas:" + " 4.";
  Modelo.textContent = "Modelo:" + " 2023.";
  Potencia.textContent = "Potencia:" + " 218.";
  Motor.textContent = "Motor:" + " 2.5.";
  Aceleracion.textContent = "Aceleracion:" + " 0 a 100km/h en 8,3 segundos";
  Baul.textContent = "Baul:" + " 524.";
  Asientos.textContent = "Asientos:" + " 5.";
  Consumo.textContent = "Consumo:" + " 5.3 l/100km";
  Precio.textContent = "Precio:" + " $30,000.";
  FotoAuto.src = "https://i.gyazo.com/7736b46ef5f54195366fe56d4edf8bca.png"
  NombreVehiculo.textContent = "Toyota Camry";
  document.querySelector(".info-container").classList.toggle("active");
};

document.querySelector("#VolkswagenGolfGTI").onclick = () => {
  Puertas.textContent = "Puertas:" + " 5.";
  Modelo.textContent = "Modelo:" + " 2022.";
  Potencia.textContent = "Potencia:" + " 290.";
  Motor.textContent = "Motor:" + " 2.0.";
  Aceleracion.textContent = "Aceleracion:" + " 0 a 100km/h en 5,6 segundos.";
  Baul.textContent = "Baul:" + " 350.";
  Asientos.textContent = "Asientos:" + " 6.";
  Consumo.textContent = "Consumo:" + " 8.04 l/100km.";
  Precio.textContent = "Precio:" + " $43,000.";
  FotoAuto.src = "https://i.gyazo.com/929360b41b8185f4ec029a639b34a3df.png"
  NombreVehiculo.textContent = "Volkswagen Gol Trend";
  document.querySelector(".info-container").classList.toggle("active");
};

document.querySelector("#FordRaptor").onclick = () => {
  Puertas.textContent = "Puertas:" + " 5.";
  Modelo.textContent = "Modelo:" + " 2023.";
  Potencia.textContent = "Potencia:" + " 456.";
  Motor.textContent = "Motor:" + " 3.5 v6.";
  Aceleracion.textContent = "Aceleracion:" + " 0 a 100km/h en 7,9 segundos.";
  Baul.textContent = "pick up:" + " 758kg.";
  Asientos.textContent = "Asientos:" + " 5.";
  Consumo.textContent = "Consumo:" + " 23.4 l/100km.";
  Precio.textContent = "Precio:" + " $105,000.";
  FotoAuto.src = "https://i.gyazo.com/8b75e19466628b77c42b2275fe17c94b.png"
  NombreVehiculo.textContent = "Ford Raptor";
  document.querySelector(".info-container").classList.toggle("active");
};

document.querySelector("#DodgeRam").onclick = () => {
  Puertas.textContent = "Puertas:" + " 5.";
  Modelo.textContent = "Modelo:" + " 2023.";
  Potencia.textContent = "Potencia:" + " 395.";
  Motor.textContent = "Motor:" + " 5.7L V8.";
  Aceleracion.textContent = "Aceleracion:" + " 0 a 100km/h en 4,5 segundos.";
  Baul.textContent = "pick up:" + " 1,860 lbs.";
  Asientos.textContent = "Asientos:" + " 5.";
  Consumo.textContent = "Consumo:" + " 11 l/100km.";
  Precio.textContent = "Precio:" + " $39,000.";
  FotoAuto.src = "https://i.gyazo.com/20a28c1db250d54ee8ec15faae3d40d8.png"
  NombreVehiculo.textContent = "Dodge Ram";
  document.querySelector(".info-container").classList.toggle("active");
};

document.querySelector("#MercedesBenzAMGGTR").onclick = () => {
  Puertas.textContent = "Puertas:" + " 3.";
  Modelo.textContent = "Modelo:" + " 2023.";
  Potencia.textContent = "Potencia:" + " 585.";
  Motor.textContent = "Motor:" + " 3982cc 8V .";
  Aceleracion.textContent = "Aceleracion:" + " 0 a 100km/h en 3,2 segundos.";
  Baul.textContent = "Baul:" + " 175.";
  Asientos.textContent = "Asientos:" + " 2.";
  Consumo.textContent = "Consumo:" + " 15.1 l/100km.";
  Precio.textContent = "Precio:" + " $200,000.";
  FotoAuto.src = "https://i.gyazo.com/9cf30f45253d602b0af0031a444bf38f.png"
  NombreVehiculo.textContent = "Mercedes Benz AMG GTR";
  document.querySelector(".info-container").classList.toggle("active");
};

document.querySelector("#BugattiChiron").onclick = () => {
  Puertas.textContent = "Puertas:" + " 2.";
  Modelo.textContent = "Modelo:" + " 2023.";
  Potencia.textContent = "Potencia:" + " 1600.";
  Motor.textContent = "Motor:" + " W16";
  Aceleracion.textContent = "Aceleracion:" + " 0 a 100km/h en  2,5 segundos.";
  Baul.textContent = "Baul:" + " 0.";
  Asientos.textContent = "Asientos:" + " 2.";
  Consumo.textContent = "Consumo:" + " 25.19 l/100km.";
  Precio.textContent = "Precio:" + " $10M.";
  FotoAuto.src = "https://i.gyazo.com/e956fe2176eea0f45e55b646b7feb09c.png"
  NombreVehiculo.textContent = "Bugatti Chiron";
  document.querySelector(".info-container").classList.toggle("active");
};

document.querySelector("#NissanGTRNismo").onclick = () => {
  Puertas.textContent = "Puertas:" + " 2.";
  Modelo.textContent = "Modelo:" + " 2022.";
  Potencia.textContent = "Potencia:" + " 570.";
  Motor.textContent = "Motor:" + " 3.8 V6.";
  Aceleracion.textContent = "Aceleracion:" + " 0 a 100km/h en 2,8 segundos.";
  Baul.textContent = "Baul:" + " 318.";
  Asientos.textContent = "Asientos:" + " 2.";
  Consumo.textContent = "Consumo:" + " 14.3 l/100km.";
  Precio.textContent = "Precio:" + " $117,000.";
  FotoAuto.src = "https://i.gyazo.com/a9b1e24ae99f3156c4c6d8619e5583b9.png"
  NombreVehiculo.textContent = "Nissan GTR Nismo";
  document.querySelector(".info-container").classList.toggle("active");
};



document.querySelector("#close-info-container").onclick = () => {
  document.querySelector(".info-container").classList.toggle("active");
};

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
const formAPI = $("#form-api");
const submit = $("#sub-form");
let formAction = formAPI[0].action;
let inputVal = formAPI[0][0].value;
formAPI.submit(function (e) {
  e.preventDefault();
});

submit.click(function () {
  if (
    !inputVal.match(
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    )
  ) {
    formAction += inputVal;
    formAPI.submit();
  }
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
