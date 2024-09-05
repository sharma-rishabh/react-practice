import React from "react";
import Pokemon from "./Pokemon.js";

const PokemonGallery = ({ pokemons }) => {
  const styles = {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: "10px",
  }
  return <div style={styles}>
   {pokemons.map((id) => (
      <Pokemon id={id} key={id}/>
    ))}
  </div>;
};

export default PokemonGallery;
