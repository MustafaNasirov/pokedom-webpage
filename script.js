import { pokemonArray } from './data/pokemon.js'

const cardContainer = document.querySelector(".card-container")

pokemonArray.forEach(pokemon => {

let type = pokemon.types.join(' & ')

    cardContainer.innerHTML += `
    <div class="card">
        <img class="card__image" src="${pokemon.sprite}"></img>
        <div class="card__content">
            <h1 class="card__heading">${pokemon.name}</h1>
            <p class="card__text">${pokemon.name} (#${pokemon.id}) is a ${type} type pokemon.</p>
    </div>`
});





