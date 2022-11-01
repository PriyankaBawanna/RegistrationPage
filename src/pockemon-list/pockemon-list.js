import React, { useState, useEffect } from "react";
import { getPokemonsFromApi } from "./api-pockemon";
const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getPokemonsFromApi()
      .then((data) => setPokemons(data.results))
      .catch((e) => setError(true));
  }, []);

  return error ? (
    <p>Unable to fetch data</p>
  ) : (
    <table>
      <tbody>
        {pokemons.map((pokemon) => (
          <tr key={pokemon.name}>
            <td>{pokemon.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default PokemonList;
