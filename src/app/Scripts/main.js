import "../Styles/style.scss"

import { getPokemons } from "./services/getPokemons.js"

let urlPokemons = "https://pokeapi.co/api/v2/pokemon/"

document.addEventListener("DOMContentLoaded", async () => {
    await getPokemons(urlPokemons);
})