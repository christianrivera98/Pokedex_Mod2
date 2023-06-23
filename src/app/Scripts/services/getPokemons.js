import axios from "axios";
import { printPokemons } from "../UI/printPokemons.js";
import { printCurrentPokemon } from "../UI/printCurrentPokemon.js";
import { removeChildNodes } from "../UI/printPokemons.js";

const pokemonsContainer = document.querySelector(".pie--imagenes");
const currentPokemon = document.getElementById("current-pokemon");


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

export const getPoke = async (offset, limit) => {
  const pokemons = [];
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    const pokemonsApi = response.data.results;

    for (let index = 0; index < pokemonsApi.length; index++) {
      const pokemon = pokemonsApi[index];
      const { data } = await axios.get(pokemon.url);

      const newPokemon = {
        name: data.name.toUpperCase(),
        image: data.sprites.other["official-artwork"].front_default,
        height: data.height,
        weight: data.weight,
        experience: data.base_experience,
        ability: data.abilities[0].ability.name.toUpperCase(),
        number: data.order,
        type: data.types[0].type.name.toUpperCase(),
        id: data.id,
      };
      pokemons.push(newPokemon);
    }

    let showPokemons = pokemons.slice(1, 5);
    let showCurrentPokemon = pokemons.slice(0, 1);

    printPokemons(pokemons, pokemonsContainer),
      printCurrentPokemon(showCurrentPokemon, currentPokemon);

    return pokemons;
  } catch (error) {
    console.log(error);
    return [];
  }
};
