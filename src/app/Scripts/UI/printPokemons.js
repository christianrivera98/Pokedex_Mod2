import { remove } from "immutable";

const pieImagenes = document.querySelector(".pie--imagenes");
const previous = document.querySelector("#anterior");
const next = document.querySelector("#siguiente");

let limit = 4;
let offset = 1;

previous.addEventListener("click", () => {
  if (offset != 1) {
    offset -= 5;
    removeChildNodes(pieImagenes);
    fetchPokemons(offset, limit);
  }
});

next.addEventListener("click", () => {
  offset += 5;
  removeChildNodes(pieImagenes);
  fetchPokemons(offset, limit);
});

export function fetchPokemons(offset, limit) {
  fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then(response => response.json())
    .then(data => {
      const pokemons = data.results;
      const pokemonUrls = pokemons.map(pokemon => pokemon.url);
      fetchPokemonDetails(pokemonUrls);
    })
    .catch(error => {
      console.error('Error al obtener los datos de los pokémon:', error);
    });
}

export function fetchPokemonDetails(urls) {
  const promises = urls.map(url =>
    fetch(url)
      .then(response => response.json())
      .then(data => data.sprites.front_default)
  );

  Promise.all(promises)
    .then(results => {
      printPokemons(results, pieImagenes);
    })
    .catch(error => {
      console.error('Error al obtener los detalles de los pokémon:', error);
    });
}

export function printPokemons(array, container) {
  container.innerHTML = '';
  array.forEach(pokemon => {
    if (pokemon) {
      container.innerHTML += `
        <figure class="pie--imagenes--poke">
          <img src="${pokemon}" alt="Pokemon">
        </figure>
      `;
    }
  });
}

export function removeChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

fetchPokemons(offset, limit);