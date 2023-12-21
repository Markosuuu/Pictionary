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

document.querySelector(".category").textContent =
  "Categoria: " + category;

// Collapse configuration menu

document.querySelector(".collapsible").addEventListener("click", function() {
  this.classList.toggle("active");
  
  const content = this.nextElementSibling;
  
  if (content.style.maxHeight){
    content.style.maxHeight = null;
    content.style.padding = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
    content.style.padding = "10px 18px";
  }
});

// Timer button

const startButton = document.querySelector(".start");
const endButton = startButton.nextElementSibling;

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

// Random word for the game

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
