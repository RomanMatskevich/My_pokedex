import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import { useFetching } from "../hooks/useFetching";
import APIService from "../API/APIService";
import Loading from "./Loading";
const DrawPokemon = (props) => {
    const navigate = useNavigate()
    let [pokemon, setPokemon] = useState({})
    const typeColors = {
        normal: '#A8A77A',
        fire: '#EE8130',
        water: '#6390F0',
        electric: '#F7D02C',
        grass: '#7AC74C',
        ice: '#96D9D6',
        fighting: '#C22E28',
        poison: '#A33EA1',
        ground: '#E2BF65',
        flying: '#A98FF3',
        psychic: '#F95587',
        bug: '#A6B91A',
        rock: '#B6A136',
        ghost: '#735797',
        dragon: '#6F35FC',
        dark: '#705746',
        steel: '#B7B7CE',
        fairy: '#D685AD'
      };

    const [fetch, isLoading, error] = useFetching(async ()=>{
        const response = await APIService.get(props.url)
        setPokemon(response)
    })
   
    useEffect(()=>{fetch()},[])
    if(isLoading) return <Loading/>
    if(error) return <div>ERROR!!!...{error}</div> 
    return(
        <div className="card" onDoubleClick={()=>navigate(`/pokemons/${pokemon.id}`)}>
            <div className="card-image">
            <img src= {pokemon.sprites.other.dream_world.front_default?pokemon.sprites.other.dream_world.front_default:"https://www.pngall.com/wp-content/uploads/4/Pokeball-PNG-Pic.png"}/>
                <h2 className="card-title">{pokemon.name}</h2>
            </div>
            
            <div className="card-content">
                
                
                <p className="card-text">HP: {pokemon.stats[0].base_stat}</p>
                <p className="card-text">Attack: {pokemon.stats[1].base_stat}</p>
                <p className="card-text">Defense: {pokemon.stats[2].base_stat}</p>
            </div>
            <div className="types-pokemon" >
                <a className = "first-type" style={{ backgroundColor: typeColors[pokemon?.types[0]?.type?.name] }}>{pokemon?.types[0]?.type?.name}</a>     <a style={{ backgroundColor: typeColors[pokemon?.types[1]?.type?.name] }}className = "second-type">{pokemon?.types[1]?.type?.name}</a>
            </div>
        </div>
       
    );
}
export default DrawPokemon;
