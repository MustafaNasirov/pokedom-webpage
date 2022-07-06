import { pokemonArray } from './data/pokemon.js'

const cardContainer = document.querySelector(".card-container")

/* const section = document.createElement("div");
section.className = "filterSection";
 */

pokemonArray.forEach(pokemon => {
let type = pokemon.types.join(' & ')
let name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

    cardContainer.innerHTML += `
    <div class="card">
        <img class="card__image" src="${pokemon.sprite}"></img>
        <div class="card__content">
            <h1 class="card__heading">${name}</h1>
            <p class="card__text">${name} (#${pokemon.id}) is a ${type} type pokemon.</p>
    </div>`
});





