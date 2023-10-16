/*
CONFIGURACIÓN DE PARTIDA:
    - Tiempo
    - Equipos
    - Si es TODO, Categorias ban
    - Palabras custom

SET EN PARTIDA
    - Timer
    - Lista de palabras de la categoría elegida
    - Lista con las palabras que ya salieron así no se repiten
    - Mensaje por si no quedan palabras de casualidad
*/

const category = localStorage.getItem("dato");

if (!category) {
  window.location.href = "index.html";
}

document.querySelector(".words .category").textContent =
  "Categoria: " + category;

document.querySelector(".finish").style.display = "none";

function timer() {
  const timerElement = document.querySelector(".timer");

  let sec = 60;

  let timer = setInterval(function () {
    timerElement.textContent = "";
    timerElement.textContent = sec - 1;
    sec--;

    if (sec < 0) {
      clearInterval(timer);
    }
  }, 1000);

  document.querySelector(".finish").style.display = "block";
  document.querySelector(".btn").style.display = "none";

  document.querySelector(".finish").addEventListener("click", () => {
    clearInterval(timer);
    timerElement.textContent = "60";
    document.querySelector(".finish").style.display = "none";
    document.querySelector(".btn").style.display = "block";
  });
}
