import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
function App() {
  let offset = 0;
  const [pokemon, setPokemon] = useState([])
  const loadMorePokemon = ()=> {
 axios.get(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=${offset}`).then(response=> {
    const newPokemon = []
    console.log(response)
    response.data.results.forEach(p=>newPokemon.push(p.name))
    console.log(newPokemon)
    setPokemon(oldPokemon =>[...oldPokemon,newPokemon])
  });
  offset +=10 
}
const handleScroll=(e)=>{
  if (window.innerHeight + e.target.documentElement.scrollTop +1 >= e.target.documentElement.scrollHeight){
    loadMorePokemon()
  }
}
useEffect(()=>{loadMorePokemon()
window.addEventListener('scroll', handleScroll)}, [])
  return (
    <div>{
      pokemon.map((pok,index) =>{
        return (
          <div>
          <box key={index}>{pok}</box>
          </div>
        )
      })
    } 
    </div>
  )
}

export default App;
