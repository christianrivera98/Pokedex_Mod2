import { currentPokemon, getPoke } from "../services/getPokemons.js";
import { printPokemons } from "./printPokemons.js";
import { removeChildNodes } from "./printPokemons.js";
let urlPokemons = "https://pokeapi.co/api/v2/pokemon/";

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



export const searchPokemons = (input, ) => {
      const pokemonsContainer = document.querySelector(".pie--imagenes");
    input.addEventListener('input', async () => {
        const value = input.value.toLowerCase();
        
        if (value) {
        const pokemons = await getPoke(urlPokemons);
        console.log(pokemons);

        const filter = pokemons.filter((poke) =>
          poke.name.toLowerCase().includes(value)
        );
        printPokemons(filter, pokemonsContainer, currentPokemon);
        }

        else {
          await getPoke(offset, limit);
        }
    })

}