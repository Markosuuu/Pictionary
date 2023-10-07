const cardCategories = document.querySelector(".card-categories");
const card = document.querySelector(".card");

categories = [
  "Todo",
  "Acciones",
  "Objetos",
  "Comidas",
  "Peliculas",
  "Series",
  "Juegos",
  "Animes",
  "Libros"
];

function createDisplayCards() {
  for (let i = 0; i < categories.length; i++) {
    const cloneCard = card.cloneNode(true);
  
    cloneCard.querySelector(".card-title").textContent = categories[i];
    cloneCard.querySelector(".card-img img").setAttribute("alt", categories[i]);
    cloneCard.querySelector("a").setAttribute("data-category", categories[i]);
    cloneCard
      .querySelector(".card-img img")
      .setAttribute("src", "img/" + categories[i] + ".svg");
  
    cardCategories.appendChild(cloneCard);
  }
  
  cardCategories.removeChild(card);
}

function sendCategory() {
  document.addEventListener('DOMContentLoaded', function() {
    const anchorElements = document.querySelectorAll("a");
    anchorElements.forEach(element => {
        element.addEventListener("click", function(event) {
          if (event.target.tagName === "DIV" || event.target.tagName === "IMG") {
            const dato = element.getAttribute("data-category");
            localStorage.setItem("dato", dato);
          }
        });
    });
  });
}

createDisplayCards()
sendCategory()