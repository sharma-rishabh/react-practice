import React, { Component } from 'react';

const TodoHeading = ({ heading }) => <h1>{heading}</h1>

const TodoItem = ({ item }) => <li>{item}</li>

const withHover = (Component) => { 
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { isHovered: false };
      this.hover = this.hover.bind(this);
    }

    hover() {
      this.setState(({isHovered})=>({ isHovered: !isHovered }));
    }
    render() {
      return <div style={{ display: "flex", width: "200px", justifyContent: "space-between" }}
        onMouseEnter={this.hover}
        onMouseLeave={this.hover}>
        <Component {...this.props} />
        {this.state.isHovered && <div>X</div>}
      </div>
    }
  }
}

export {TodoItem, TodoHeading, withHover};
