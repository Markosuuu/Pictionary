/*
CONFIGURACIÓN DE PARTIDA:
    - Tiempo
    - Equipos
    - Si es dentro de la categoría "TODO", Categorias para banear
    - Palabras custom
*/

const category = localStorage.getItem("dato"); // Dato traido con localStorage

if (!category) {
  window.location.href = "index.html"; // Si el dato no existe, devuelve al index
}

const startButton = document.querySelector(".start");
const endButton = document.querySelector(".finish");

document.querySelector(".category").textContent =
  "Categoria: " + category;

function timer() {
  const timerElement = document.querySelector(".timer");

  let sec = 60;

  let timer = setInterval(function () {
    timerElement.textContent = "";
    timerElement.textContent = sec - 1;
    sec--;

    if (sec <= 0) {
      clearInterval(timer);
    }
  }, 1000);

  startGame();

  startButton.classList.add("d-none");
  endButton.classList.remove("d-none");

  // Si endButton es presionado, termina el timer, lo reinicia y cambia el botón.
  endButton.addEventListener("click", () => {
    clearInterval(timer);
    timerElement.textContent = "60";
    endButton.classList.add("d-none");
    startButton.classList.remove("d-none");
  });
}

function startGame() {
  const word = document.querySelector(".word");

  let wordsList = ["Cantar", "Saltar", "Pelear", "Volar", "Caer"];

  let randomWord =
  wordsList[Math.floor(Math.random() * wordsList.length)]; // Toma un elemento al azar de la lista

  word.textContent = randomWord;

  /*
    Quitar la palabra para que no se repita

    Caso de que la lista se quede sin elementos

    Lista personalizada para cada categoría
  */

  endButton.addEventListener("click", () => {
    word.textContent = "...";
  });
}
