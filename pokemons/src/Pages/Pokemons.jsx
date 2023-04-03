

import DrawManyPokemon from '../components/DrawManyPokemons';
import { useState, useEffect} from 'react';
import {useFetching}  from '../hooks/useFetching';
import APIService from '../API/APIService';
import PagesButtons from '../components/PagesButtons';
import Navbar from '../components/NavBar';
import Loading from '../components/Loading';
function Pokemons(){


let [pokemons, setPokemons] = useState([])
let [currentPage, setCurrentPage] = useState(window.localStorage.getItem('currentPage')||1)
let [totalPokemons, setTotatlPokemons] = useState(100)
function setPage(id){id<1||id>Math.ceil(totalPokemons/16)?setCurrentPage(currentPage):setCurrentPage(id)}
const [fetch, isLoading, error] = useFetching(async ()=>{
  const response = await APIService.getPage(16,currentPage)
  setPokemons(response.results)
  setTotatlPokemons(response.count)
})
useEffect(()=>{fetch()},[currentPage])

useEffect(()=>{window.localStorage.setItem('currentPage',currentPage)}, [currentPage])
useEffect(()=>{let data = window.localStorage.getItem('currentPage')
              setCurrentPage(parseInt(data))}, [])







if(isLoading) return <Loading/>
if(error) return <div>ERROR!!!...{error}</div>  
return (<div className='App'>  
  <Navbar/>
  <DrawManyPokemon pokemons = {pokemons}/>
  <PagesButtons currentPage = {currentPage}   setCurrentPageHandler = {setPage} totalPokemons = {totalPokemons}/>
  </div>)
}
export default Pokemons;
