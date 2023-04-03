import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pokemons from '../Pages/Pokemons'
import PokemonInfo from '../Pages/PokemonInfo'


function AppRouter(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path = "/pokemons" element = {<Pokemons/>}/>
                <Route path = "/another" element = {<PokemonInfo/>}/>
                <Route path = "/pokemons/:id" element = {<PokemonInfo/>}/>
            </Routes>
        </BrowserRouter>
    )


}



export default AppRouter;