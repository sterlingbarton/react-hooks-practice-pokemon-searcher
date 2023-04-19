import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonList, setPokemonList] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then(r => r.json())
    .then(data => setPokemonList(data))
  }, [])

  const searchedPokemonList = pokemonList.filter(pokemon => pokemon.name.toLowerCase().includes(searchQuery))

  function handleChange(e){
    setSearchQuery(e.target.value)
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm setPokemonList={setPokemonList} pokemonList={searchedPokemonList}/>
      <br />
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} handleChange={handleChange}/>
      <br />
      <PokemonCollection pokemonList={searchedPokemonList}/>
    </Container>
  );
}

export default PokemonPage;
