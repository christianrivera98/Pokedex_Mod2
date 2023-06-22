const getPokemonsConteiner = document.querySelector('.getPokemons-conteiner')

function fetchPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res => res.json())
    .then((data) => {
        createPokemon(data);
      });
  
}
fetchPokemon(1);

function getPokemons(number) {
    for (let i = 1; i <= number; i++) {
        fetchPokemon(i);
        
    }
}

function createPokemon(pokemon) {
    const card = document.createElement('div');
    card.classList.add('pokemon-card');

    const spriteContainer = document.createElement ('div');
    spriteContainer.classList.add('img-pokemon-conteiner');

    const sprite = document.createElement ('img');
    sprite.src = pokemon.sprites.front_default 

    spriteContainer.appendChild(sprite);

    card.appendChild(spriteContainer);

    getPokemonsConteiner.appendChild(card);

}

getPokemons(3);