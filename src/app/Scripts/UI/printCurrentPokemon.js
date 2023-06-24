import iconPokemon from "../data/icon";

export const printCurrentPokemon = (array, container) => {
    const icono = iconPokemon;
    
    container.innerHTML = '';
    array.forEach((pokemon) => {
    let icon='';
        

        for (const key in iconPokemon) {
            if (key == pokemon.type) {
                
                console.log(icono[key]);
                
                icon = icono[key];
                
            }
            console.log('+++');
            console.log(key + '<- igual a ->' + pokemon.type);
            console.log('---');
        }
        container.innerHTML += `
        <section class="main-pokemon">
        <div class="main-pokemon--title">
                <figure class="title-icon">
                    <img src="${icon}">
                </figure>
                <h1>${pokemon.name}</h1>
            </div>
            <figure class="pokemon-picture">
                <img src="${pokemon.image}" alt="${pokemon.name}">
            </figure>
        </section>
        <section class="main-table">
            <div class="main-table--table-element">
                <h3>NO.</h3>
                <p>${pokemon.number}</p>
            </div>
            <div class="main-table--table-element">
                <h3>TYPE</h3>
                <p>${pokemon.type}</p>
            </div>
            <div class="main-table--table-element">
                <h3>HEIGHT</h3>
                <p>${pokemon.height} m</p>
            </div>
            <div class="main-table--table-element">
                <h3>EXPERIENCE</h3>
                <p>${pokemon.experience}</p>
            </div>
            <div class="main-table--table-element">
                <h3>ABILITY</h3>
                <p>${pokemon.ability}</p>
            </div>
            <div class="main-table--table-element">
                <h3>WEIGHT</h3>
                <p>${pokemon.weight} lbs</p>
            </div>
            </section>
  `  })}