import { pokemonArray } from './data/pokemon.js'


console.log(pokemonArray)


/* 
pokemonArray.forEach(pokemon => {
    
}); */


const cardContainer = document.querySelector(".card-container")

cardContainer.innerHTML += `<div class="card">
    <img class="card__image" src=""> </img>
    <div class="card__content">
    <h1 class="card__heading"></h1>
    <p class="card__text"></p>
    </div>`






