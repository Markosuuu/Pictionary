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
]

for (let i = 0; i < categories.length; i++) {
    const cloneCard = card.cloneNode(true);
    
    cloneCard.querySelector('.card-title').textContent = categories[i];
    cloneCard.querySelector('.card-img img').setAttribute('alt', categories[i]);
    cloneCard.querySelector('.card-img img').setAttribute('src', "img/" + categories[i] + ".svg");

    cardCategories.appendChild(cloneCard);
}

cardCategories.removeChild(card);
