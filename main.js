const cardCategories = document.querySelector(".card-categories");
const card = document.querySelector(".card");
const cardImg = document.querySelector(".card-img img");
const cardTitle = document.querySelector(".card-title");

categories = [
    "Todo",
    "Acciones",
    "Objetos",
    "Comidas",
    "Películas",
    "Videojuegos",
    "Mangas/Animes"
]

for (let i = 0; i < categories.length; i++) {
    const cloneCard = card.cloneNode(true);
    
    cloneCard.querySelector('.card-title').textContent = categories[i];
    cloneCard.querySelector('.card-img img').setAttribute('alt', categories[i]);

    cardCategories.appendChild(cloneCard);
}

cardCategories.removeChild(card);
