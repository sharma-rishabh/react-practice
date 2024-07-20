import React from 'react';  

const Input = ({ value, handleChange }) => {
  return (
    <input value={value} onChange={(event) => handleChange(event.target.value)} />
  );
}

class FilteredPokemonGallery extends React.Component {
  constructor(props) {  
    super(props);
    this.state = {
      filter: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(filter) {
    this.setState({ filter });
  }

  render() {
    return (
      <div>
        <Input value={this.state.filter} handleChange={this.handleChange} />
        {this.props.pokemons
          .filter(({ name }) => name.includes(this.state.filter))
          .map(({ name, imageUrl }) => (
            <div key={name}>
              <p>{name}</p>
              <img src={imageUrl} alt={name} />
            </div>
          ))}
      </div>
    );
  }

}

export default FilteredPokemonGallery;