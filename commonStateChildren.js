class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { timesClicked: 0 };
    this.incrementCount = this.incrementCount.bind(this);
    this.reset = this.reset.bind(this);
  }

  incrementCount() {
    this.setState(({ timesClicked }) => ({
      timesClicked: timesClicked + 1,
    }));
  }

  reset() {
    this.setState((_) => ({ timesClicked: 0 }));
  }

  render() {
    const incrementButton = React.createElement(
      "button",
      { onClick: this.incrementCount },
      `clicked ${this.state.timesClicked} times`
    );
    const resetButton = React.createElement(
      "button",
      { onClick: this.reset },
      `reset`
    );
    return React.createElement("div", null, incrementButton, resetButton);
  }
}

const button = React.createElement(Button);
const container = document.getElementById("container");
ReactDOM.render(button, container);
