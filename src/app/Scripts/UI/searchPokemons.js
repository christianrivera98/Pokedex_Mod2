import { getPoke } from "../services/getPokemons.js";
import { printPokemons } from "./printPokemons.js";
let urlPokemons = "https://pokeapi.co/api/v2/pokemon/";


export const searchPokemons = (input) => {
      const pokemonsContainer = document.querySelector(".pie--imagenes");
    input.addEventListener('input', async () => {
        const value = input.value.toLowerCase();
        const pokemons = await getPoke(urlPokemons);
        console.log(pokemons);

        const filter = pokemons.filter((poke) =>
          poke.name.toLowerCase().includes(value)
        );
        printPokemons(filter, pokemonsContainer);
        // pokemons.forEach(pok => {
        //     const isVisible = pok.name.toLowerCase().includes(value)
        //     if (!isVisible) {
        //         const container = document.getElementById(pok.id);
        //         console.log(container)
        //         container.classList.add('inactive');
        //     }
        // });
    })
}