import "./App.css";
import Pokemon from './Pokemon.js';
import PokemonGallery from './PokemonGallery.js';

import {TodoHeading, TodoItem, withHover} from "./Todo.jsx";



const pokemons = new Array(10).fill(null).map((_, index) => index + 100 );
function App() {
  return <div>
    <PokemonGallery pokemons={pokemons} />
  </div>;
}

export default App;
