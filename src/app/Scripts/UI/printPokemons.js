import { printCurrentPokemon } from "./printCurrentPokemon";

export const printPokemons = (array, container, cotainerSecond) => {
  
  container.innerHTML = '';
  array.forEach((pokemon) => {
    const figure = document.createElement('figure');
    figure.classList.add('pie--imagenes--poke');
    figure.id = pokemon.id;

    const image = document.createElement('img');
    image.src = pokemon.image;
    image.alt = 'Pokemon uno';
    image.classList.add('printmain');
    image.dataset.id = pokemon.name;

    figure.appendChild(image);
    container.appendChild(figure);

    figure.addEventListener('click', () => {
      console.log('Haz dado Click sobre una imagen, el pókemon es de nombre: ' + pokemon.name + '. Ese. Ahora, se imprime en pantalla dicho Pokemon.');
      const arregloPokemon = [];
      arregloPokemon.push(pokemon);
      printCurrentPokemon(arregloPokemon, cotainerSecond);


      
    


    });
  });
};



  
  export const removeChildNodes = (parent) => {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }
