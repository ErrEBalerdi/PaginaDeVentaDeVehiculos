document.querySelector("#close-info-container").onclick = () => {
  document.querySelector(".info-container").classList.toggle("active");
};
// Catalogo de Vehiculos //

const vehiculos = [
  {
    nombre: "Ford Fiesta",
    puertas: 5,
    modelo: 2023,
    potencia: 198,
    motor: 1.1,
    aceleracion: "0 a 100km/h en 6,7 segundos",
    baul: 293,
    asientos: 5,
    consumo: "5 - 7.1 l/100km",
    precio: "$20.000",
    fotoAuto: "https://i.gyazo.com/6fd7e508e2d2daf960ba54439abe5cef.png",
  },
  {
    nombre: "Toyota Camry",
    puertas: 4,
    modelo: 2023,
    potencia: 218,
    motor: 2.5,
    aceleracion: "0 a 100km/h en 8,3 segundos",
    baul: 524,
    asientos: 5,
    consumo: "5.3 l/100km",
    precio: "$42.000",
    fotoAuto: "https://i.gyazo.com/7736b46ef5f54195366fe56d4edf8bca.png",
  },
  {
    nombre: "Volkswagen Gol Trend",
    puertas: 3,
    modelo: 2022,
    potencia: 110,
    motor: 1.6,
    aceleracion: "0 a 100km/h en 10,1 segundos",
    baul: 285,
    asientos: 5,
    consumo: "6.2 l/100km",
    precio: "$12.500",
    fotoAuto: "https://i.gyazo.com/828bd95be3a1a1cc15355fcc877e22e5.png",
  },
  {
    nombre: "Toyota Corolla",
    puertas: 5,
    modelo: 2023,
    potencia: 196,
    motor: 2.0,
    aceleracion: "0 a 100km/h en 7,2 segundos",
    baul: 361,
    asientos: 5,
    consumo: "4.5 - 5.2 l/100km",
    precio: "$24.000",
    fotoAuto: "https://i.gyazo.com/7736b46ef5f54195366fe56d4edf8bca.png",
  },
  {
    nombre: "Volkswagen Passat",
    puertas: 4,
    modelo: 2023,
    potencia: 190,
    motor: 2.0,
    aceleracion: "0 a 100km/h en 7,3 segundos",
    baul: 586,
    asientos: 5,
    consumo: "4.7 - 6.9 l/100km",
    precio: "$35.900",
    fotoAuto: "https://i.gyazo.com/a82023ed9d892733c161b69557cbf0f1.png",
  },
  {
    nombre: "Ford Ecosport",
    puertas: 5,
    modelo: 2023,
    potencia: 123,
    motor: 1.5,
    aceleracion: "0 a 100km/h en 9,7 segundos",
    baul: 355,
    asientos: 5,
    consumo: "5.9 - 6 l/100km",
    precio: "$21.800",
    fotoAuto: "https://i.gyazo.com/9956ac84b7ee2af08f9130047be1774a.png",
  },
  {
    nombre: "Fiat 500",
    puertas: 3,
    modelo: 2023,
    potencia: 70,
    motor: 1.2,
    aceleracion: "0 a 100 km/h en 7 segundos",
    baul: 185,
    asientos: 4,
    consumo: "4.6 - 5.4 l/100km",
    precio: "$14.500",
    fotoAuto: "https://i.gyazo.com/54fdcedb00de7711eb534869e010df65.png",
  },
  {
    nombre: "Chevrolet Cruze",
    puertas: 4,
    modelo: 2023,
    potencia: 150,
    motor: 1.4,
    aceleracion: "0 a 100 km/h en 8,5 segundos",
    baul: 440,
    asientos: 5,
    consumo: "5.3 - 7.3 l/100km",
    precio: "$16.300",
    fotoAuto: "https://i.gyazo.com/7f52d741883b652e52a8a00f0cacf95e.png",
  },
  {
    nombre: "Volkswagen Golf GTI",
    puertas: 5,
    modelo: 2022,
    potencia: 290,
    motor: " 2.0.",
    aceleracion: " 0 a 100km/h en 5,6 segundos.",
    baul: 350,
    asientos: 6,
    consumo: " 8.04 l/100km.",
    precio: " $43.000.",
    fotoAuto: "https://i.gyazo.com/929360b41b8185f4ec029a639b34a3df.png",
  },
  {
    nombre: "Ford Raptor",
    puertas: 5,
    modelo: 2023,
    potencia: 456,
    motor: "3.5 v6.",
    aceleracion: " 0 a 100km/h en 7,9 segundos.",
    baul: "pick up: 758kg.",
    asientos: 5,
    consumo: "23.4 l/100km.",
    precio: " $105.000.",
    fotoAuto: "https://i.gyazo.com/8b75e19466628b77c42b2275fe17c94b.png",
  },
  {
    nombre: "Dodge Ram",
    puertas: 5,
    modelo: 2023,
    potencia: 395,
    motor: " 5.7L V8.",
    aceleracion: " 0 a 100km/h en 4,5 segundos.",
    baul: "pick up: 1,860 lbs",
    asientos: 5,
    consumo: " 11 l/100km.",
    precio: " $39.000.",
    fotoAuto: "https://i.gyazo.com/20a28c1db250d54ee8ec15faae3d40d8.png",
  },
  {
    nombre: "Mercedes Benz AMG GTR",
    puertas: 3,
    modelo: 2023,
    potencia: 585,
    motor: "3982cc 8V .",
    aceleracion: "0 a 100km/h en 3,2 segundos.",
    baul: 175,
    asientos: 2,
    consumo: "15.1 l/100km.",
    precio: "$200,000.",
    fotoAuto: "https://i.gyazo.com/9cf30f45253d602b0af0031a444bf38f.png",
  },
  {
    nombre: "Bugatti Chiron",
    puertas: 2,
    modelo: 2023,
    potencia: 1600,
    motor: " W16",
    aceleracion: " 0 a 100km/h en  2,5 segundos.",
    baul: 0,
    asientos: 2,
    consumo: " 25.19 l/100km.",
    precio: " $10M.",
    fotoAuto: "https://i.gyazo.com/e956fe2176eea0f45e55b646b7feb09c.png",
  },
  {
    nombre: "Nissan GTR Nismo",
    puertas: " 2",
    modelo: " 2022",
    potencia: " 570",
    motor: " 3.8 V6.",
    aceleracion: " 0 a 100km/h en 2,8 segundos.",
    baul: " 318",
    asientos: " 2",
    consumo: " 14.3 l/100km",
    precio: " $117.000",
    fotoAuto: "https://i.gyazo.com/a9b1e24ae99f3156c4c6d8619e5583b9.png",
  },
];

let puertas = document.getElementById("Puertas");
let modelo = document.getElementById("Modelo");
let potencia = document.getElementById("Potencia");
let motor = document.getElementById("Motor");
let aceleracion = document.getElementById("Aceleracion");
let baul = document.getElementById("Baul");
let asientos = document.getElementById("Asientos");
let consumo = document.getElementById("Consumo");
let precio = document.getElementById("Precio");
let fotoAuto = document.getElementById("FotoAuto");
let nombreVehiculo = document.getElementById("NombreVehiculo");

const verMasBtns = document.querySelectorAll("#verMasBtn");
for (let btn of verMasBtns) {
  btn.addEventListener("click", addCarContent);
}

function addCarContent(e) {
  let currentCar = "";

  if (e.target.parentNode.className == "content") {
    currentCar = e.target.parentNode.firstElementChild.textContent;
    addContent(currentCar);
    document.querySelector(".info-container").classList.toggle("active");
  } else {
    currentCar = e.target.parentNode.childNodes[3].textContent;
    addContent(currentCar);
    document.querySelector(".info-container").classList.toggle("active");
  }
}

function addContent(currentCar) {
  for (let vehiculo of vehiculos) {
    if (currentCar == vehiculo.nombre) {
      nombreVehiculo.textContent = vehiculo.nombre;
      puertas.textContent = "Puertas: " + vehiculo.puertas;
      modelo.textContent = "Modelo: " + vehiculo.modelo;
      potencia.textContent = "Potencia: " + vehiculo.potencia;
      motor.textContent = "Motor: " + vehiculo.motor;
      aceleracion.textContent = "Aceleracion: " +vehiculo.aceleracion;
      baul.textContent = "Baul: " + vehiculo.baul;
      asientos.textContent = "Asientos: " + vehiculo.asientos;
      consumo.textContent = "Consumo: " + vehiculo.consumo;
      precio.textContent = "Precio: " + vehiculo.precio;
      fotoAuto.src = vehiculo.fotoAuto;
    }
  }
}
