import "../Styles/style.scss"

import { getPoke } from "./services/getPokemons.js";
import { searchPokemons } from "./UI/searchPokemons.js";

let urlPokemons = "https://pokeapi.co/api/v2/pokemon/";
const inputPokemons = document.getElementById('barra-busqueda')

document.addEventListener("DOMContentLoaded", async () => {
    await getPoke(urlPokemons);
})

searchPokemons(inputPokemons)