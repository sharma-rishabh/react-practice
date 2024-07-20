import "./App.css";

import FilteredPokemonGallery from "./FilteredPokemonGallery";
import * as data from "./pokemons.json";

function App() {
  const pokemons = data.default;

  return <FilteredPokemonGallery pokemons={pokemons} />;
}

export default App;
