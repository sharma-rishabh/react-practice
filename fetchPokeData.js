import fetch from "node-fetch";
import fs from "fs";

const fetchPokeData = (pokeId) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
    });
};

const transform = (data) => ({
  name: data.name,
  imageUrl: data.sprites.front_default,
  types: data.types.map((type) => type.type.name),
});

const fillPokemons = async () => {
  const pokemons = [];
  const ids = new Array(200).fill(1).map((_, i) => i + 1);

  for (const id of ids) {
    const pokemon = await fetchPokeData(id);
    pokemons.push(transform(pokemon));
  }
  return pokemons;
};

const pokemons = await fillPokemons();

fs.writeFileSync("pokemons.json", JSON.stringify(pokemons, null, 2));
