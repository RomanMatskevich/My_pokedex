// import React from "react";
import APIService from '../API/APIService';
import { useEffect, useState } from 'react';
import { useFetching } from '../hooks/useFetching';
import Loading from './Loading';
const MovesTable = ({ info }) => {
  const [moves, setMoves] = useState([]);
  const [fetch, isLoading, error] = useFetching(async ()=>{
    const movesData = info.moves.map(async (move) => {
      const moveData = await APIService.get(move.move.url) 
      return {
        id: moveData.id,
        name: moveData.name,
        type: moveData.type.name,
        power: moveData.power,
        pp: moveData.pp,
        accuracy: moveData.accuracy,
        description: moveData.effect_entries.find(entry => entry.language.name === 'en')?moveData.effect_entries.find(entry => entry.language.name === 'en').short_effect:"no description",
        };
    });
    Promise.all(movesData).then(setMoves);
  })
  useEffect(() => {fetch()}, [info]);
  if(isLoading)return <Loading/>
  if(error)return <div>{error}</div>
  return (
    <div className='table-div'>
      <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Power</th>
            <th>PP</th>
            <th>Accuracy</th>
            <th>Description</th>
            
          </tr>
        </thead>
        <tbody>
          {moves.map((move) => (
            <tr key={move.id}>
              <td>{move.id}</td>
              <td>{move.name}</td>
              <td>{move.type}</td>
              <td>{move.power}</td>
              <td>{move.pp}</td>
              <td>{move.accuracy}</td>
              <td>{move.description}</td>
          
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MovesTable;
