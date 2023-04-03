import { useParams } from "react-router-dom";
import APIService from '../API/APIService';
import { useEffect, useState } from "react";
import {useFetching}  from '../hooks/useFetching';
import MovesTable from '../components/MovesTable'
import DrawInfo from '../components/DrawInfo'
import Navbar from "../components/NavBar";
import Loading from "../components/Loading";
function PokemonInfo(){ 
    const {id} = useParams(1)
    const [moves, setMoves] = useState([]);
    const [info, setInfo] = useState({})
    const [fetch, isLoading, error] = useFetching(async ()=>{
        const response = await APIService.getOne(id)
        setInfo(response)
      })
    useEffect(()=>{fetch()},[id])    
  
    

    if(isLoading) return <Loading/>
    if(error) return <div>ERROR!!!...{error}</div>
    return(
    <div className="main">
        <Navbar/>
        <MovesTable info = {info}/>
        <DrawInfo info ={info}/>
    </div>
    )
}
export default PokemonInfo;
