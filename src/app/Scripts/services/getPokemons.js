import axios from "axios";
import { printPokemons } from "../UI/printPokemons.js";
import { printCurrentPokemon } from "../UI/printCurrentPokemon.js";

const pokemonsContainer = document.querySelector(".pie--imagenes");
const currentPokemon = document.getElementById("current-pokemon");

// export const getPokemons = async (url) => {
//   let pokemons = [];
//   try {
//     const response = await axios.get(url);

//     if (response.status === 200) {
//       return new Promise((resolve) => {
//         response.data.results.forEach(async (pokemon, index) => {
//           const { data } = await axios.get(pokemon.url);
//           const newPokemon = {
//             name: data.name.toUpperCase(),
//             image: data.sprites.other["official-artwork"].front_default,
//             height: data.height,
//             weight: data.weight,
//             experience: data.base_experience,
//             ability: data.abilities[0].ability.name.toUpperCase(),
//             number: data.order,
//             type: data.types[0].type.name.toUpperCase(),
//             id: data.id,
//           };
//           pokemons.push(newPokemon);
//           let showPokemons = pokemons.slice(1, 5);
//           let showCurrentPokemon = pokemons.slice(0, 1);

//           if (response.data.results.length === index + 1) {
//             resolve(
//               printPokemons(showPokemons, pokemonsContainer),
//               printCurrentPokemon(showCurrentPokemon, currentPokemon)
//             );
//           }
//         });
//       });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

export const getPoke = async (url) => {
  const pokemons = [];
  try {
    const response = await axios.get(url);
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

    printPokemons(showPokemons, pokemonsContainer),
      printCurrentPokemon(showCurrentPokemon, currentPokemon);

    return pokemons;
  } catch (error) {
    console.log(error);
    return [];
  }
};
