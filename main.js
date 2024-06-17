class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { secondsElapsed: 0 };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(({ secondsElapsed }) => ({
        secondsElapsed: secondsElapsed + 1,
      }));
    }, 1000); // Need to add the setInterval here as adding it anywhere else will cause it to be called multiple times
  }

  render() {
    const div = React.createElement(
      "div",
      { style: { color: "red" } },
      `Seconds Elapsed: ${this.state.secondsElapsed}`
    );
    return div;
  }
}

const timer = React.createElement(Timer);

const container = document.getElementById("container");
ReactDOM.render(timer, container);
