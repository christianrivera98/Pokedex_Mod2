import "../Styles/style.scss"

import { getPoke } from "./services/getPokemons.js";
import { searchPokemons } from "./UI/searchPokemons.js";
import { removeChildNodes } from "./UI/printPokemons.js";

const inputPokemons = document.getElementById('barra-busqueda')
const pieImagenes = document.querySelector(".pie--imagenes");
const previous = document.querySelector("#anterior");
const next = document.querySelector("#siguiente");
let limit = 4;
let offset = 0;

previous.addEventListener("click", () => {
    if (offset != 0) {
        offset -= 4;
        removeChildNodes(pieImagenes);
        getPoke(offset, limit);
    }
});
  
next.addEventListener("click", () => {
    offset += 4;
    removeChildNodes(pieImagenes);
    getPoke(offset, limit);
    
});

document.addEventListener("DOMContentLoaded", async () => {
    await getPoke(offset, limit);

})

searchPokemons(inputPokemons)