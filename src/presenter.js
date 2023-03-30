import calculadora from "./sumador";

const first = document.querySelector("#cadena");
const form = document.querySelector("#sumarCadena-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const cadenita = text.parseint(first.value);

  div.innerHTML = "<p>" + calculadora(cadenita) + "</p>";
});
