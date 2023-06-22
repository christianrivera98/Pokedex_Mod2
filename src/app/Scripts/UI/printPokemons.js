export const printPokemons = (array, container) => {
    container.innerHTML = '';
    array.forEach((pokemon) => {
        container.innerHTML += `
        <figure class="pie--imagenes--poke">
            <img src="${pokemon.image}" alt="Pokemon uno">
        </figure>
  `  })}