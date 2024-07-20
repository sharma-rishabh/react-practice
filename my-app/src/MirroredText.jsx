import React from 'react';

const Mirror = ({ text }) => { 
  return (
    <div>
      {text.split('').reverse().join('')}
    </div>
  );

}

const Input = ({ value, handleChange }) => {
  return (
    <input value={value} onChange={(event) => handleChange(event.target.value)} />
  );
}

class MirroredText extends React.Component {
  constructor(props) {  
    super(props);
    this.state = {
      text: 'latin',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(text) {
    this.setState({ text });
  }
  render() {
    return (
      <div>
        <Input value={this.state.text} handleChange={this.handleChange} />
        <Mirror text={this.state.text} />
      </div>
    );
  }

}

export default MirroredText;