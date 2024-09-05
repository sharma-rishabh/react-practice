import React, {useState, useEffect} from "react";

const PokemonDetails = ({ name, imageUrl }) => { 
  const styles = {
    width: "150px",
    height: "150px",
    border: "1px solid black",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }
  return <div style={styles}>
      <p>{name}</p>
      <img src={imageUrl} alt={name} />
  </div>
}

const usePokemon = (id) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => { 
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then(({name, sprites}) => setPokemon({name, imageUrl: sprites.front_default}));
  }, []);

  return pokemon;
}

const Pokemon = ({ id }) => {
  const pokemon = usePokemon(id);
  return pokemon ? <PokemonDetails {...pokemon} /> : <p>Loading...</p>;
};

export default Pokemon;
