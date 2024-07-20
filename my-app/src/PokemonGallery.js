import React from "react";
import Pokemon from "./Pokemon.js";

const PokemonGallery = ({ pokemons }) => {
  return pokemons.map(({ name, imageUrl }) => (
    <Pokemon name={name} imageUrl={imageUrl} key={name} />
  ));
};

export default PokemonGallery;
