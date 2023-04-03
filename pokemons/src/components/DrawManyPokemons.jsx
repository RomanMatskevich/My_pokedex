import React from "react";
import DrawPokemon from "./DrawPokemon";
import '../App.css'

const DrawManyPokemon = (props) => {
    return(
        <div className= 'fullPokemons'>
            {props.pokemons.map((pokemon)=><DrawPokemon  url = {pokemon.url} key ={parseInt((pokemon.url).slice(34, -1))}/>)}
        </div>    
    );
}
export default DrawManyPokemon;
