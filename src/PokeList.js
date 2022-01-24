import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Loader from './components/Loader';
import { useEffect, useState } from "react";
import axios from "axios";
import PokeCard from "./components/PokeCard";


export default function PokeList() {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [nextList, setNextList] = useState();
  
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/").then((res) => {
      const fetches = res.data.results.map((p) =>
        axios.get(p.url).then((res) => res.data)
      );
      setNextList(res.data.next);
  
      Promise.all(fetches).then((data) => {
        setPokemons(data);
        setIsLoading(false);
      });
    });
  }, []);

  const pokemonslisting = pokemons.map((pokemon) => <PokeCard pokemon={pokemon} />);

  return(
    <Container>
      <Row xs={2} md={4} lg={5} className="justify-content-between my-5 d-flex gap-3" >
        {isLoading && <Loader />}
        {!isLoading && pokemonslisting}
      </Row>
    </Container>
  );
}
