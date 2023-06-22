import axios from "axios";
import { printPokemons } from "../UI/printPokemons.js";
import { printCurrentPokemon } from "../UI/printCurrentPokemon.js";
const pokemonsContainer = document.querySelector('.imagenes');
const currentPokemon = document.querySelector('.current-pokemon')

let pokemons = []

export const getPokemons = async (url) => {
    try {const response = await axios.get(url)
    
    if (response.status === 200) {
        return new Promise((resolve) => {        
            response.data.results.forEach(async (pokemon, index) => {
            const {data} = await axios.get(pokemon.url)
            console.log(data);
            const newPokemon = {
                name: data.name.toUpperCase(),
                image: data.sprites.front_default,
                height: data.height,
                weight: data.weight,
                experience: data.base_experience,
                ability: data.abilities[0].ability.name.toUpperCase(),
                number: data.order,
                id: data.id

            }
            pokemons.push(newPokemon);
            let showPokemons = pokemons.slice(1, 5)
            let showCurrentPokemon = pokemons.slice(0, 1)
            
                if (response.data.results.length === index + 1) {
                    resolve(printPokemons(showPokemons, pokemonsContainer),
                    printCurrentPokemon(showCurrentPokemon, currentPokemon))
                }
        });
       
        ;})

    }
}
    catch (error){
        console.log(error);
    }
}