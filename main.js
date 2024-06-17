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

class ButtonClicked extends React.Component {
  constructor(props) {
    super(props);
    this.state = { timesClicked: 0 };
  }

  render() {
    const button = React.createElement(
      "button",
      {
        onClick: () => {
          this.setState(({ timesClicked }) => ({
            timesClicked: timesClicked + 1,
          }));
        },
      },
      `Times Clicked: ${this.state.timesClicked}`
    );

    const finished = React.createElement("p", null, "finished");
    return this.state.timesClicked > this.props.maxClicks ? finished : button;
  }
}

const button = React.createElement(ButtonClicked, { maxClicks: 5 });

const container = document.getElementById("container");
ReactDOM.render(button, container);
