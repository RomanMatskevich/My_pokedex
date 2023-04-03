import React from 'react';
import '../App.css';
import {useNavigate, useParams} from 'react-router-dom'
import { render } from '@testing-library/react';

function Navbar() {
    const navigate = useNavigate()
    const {id} = useParams(1)
    return (
        
        <div className="navbar">
            <a  onClick={()=>navigate(`/pokemons`)} className="navbar__home">Home</a>
            <img onClick={()=>window.open(`https://pokeapi.co/`,'blank')} src='https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'/>
            {id?<div><a className='navbar_pagination' onClick={()=>navigate(`/pokemons/${parseInt(id)-1}`)}>&lt;prev</a>
                <a className='navbar_pagination_id' >{id}</a>
                <a className='navbar_pagination' onClick={()=>navigate(`/pokemons/${parseInt(id)+1}`)}>next&gt;</a></div>:""}
        </div>
    );
}

export default Navbar;