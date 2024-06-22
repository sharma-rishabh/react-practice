const PokemonDetails = ({ name, imageUrl }) => {
  const title = React.createElement("p", null, name);
  const img = React.createElement("img", {
    src: imageUrl,
  });
  return React.createElement("div", { class: "pokeCard" }, title, img);
};

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, pokemonDetails: {} };
  }

  componentDidMount() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokeId}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          loading: false,
          pokemonDetails: {
            name: data.name,
            imageUrl: data.sprites.front_default,
          },
        });
      });
  }

  render() {
    const Pokemon = React.createElement(
      PokemonDetails,
      this.state.pokemonDetails
    );

    return this.state.loading
      ? React.createElement("p", null, "Loading...")
      : Pokemon;
  }
}

class PokemonGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pokemonsToLoad: 5 };
    this.loadMore = this.loadMore.bind(this);
  }

  loadMore() {
    this.setState(({ pokemonsToLoad }) => ({
      pokemonsToLoad: pokemonsToLoad + 5,
    }));
  }
  render() {
    const pokeIds = new Array(this.state.pokemonsToLoad)
      .fill(null)
      .map((_, i) => ({ pokeId: i + 1 }));
    const pokemons = pokeIds.map((props) =>
      React.createElement(Pokemon, { ...props, key: props.pokeId })
    );
    const loadMore = React.createElement(
      "button",
      {
        onClick: this.loadMore,
      },
      "Load more"
    );
    return React.createElement(
      "div",
      null,
      React.createElement("div", { class: "pokemon" }, pokemons),
      loadMore
    );
  }
}

const container = document.querySelector("#container");
ReactDOM.render(React.createElement(PokemonGallery, null), container);
