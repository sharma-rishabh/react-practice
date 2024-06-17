class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { secondsElapsed: 0 };
  }

  componentDidMount() {
    console.log("componentDidMount: called after the first render");
    this.timerId = setInterval(() => {
      console.log("still ticking");
      this.setState(({ secondsElapsed }) => ({
        secondsElapsed: secondsElapsed + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount: called before the component is removed");
    clearInterval(this.timerId);
  }

  render() {
    console.log("Render: called first and called again and again");
    const div = React.createElement(
      "div",
      { style: { color: "red" } },
      `Seconds Elapsed: ${this.state.secondsElapsed}`
    );
    return div;
  }
}

class HaltableTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { halted: false };
  }

  render() {
    const haltButton = React.createElement(
      "button",
      {
        onClick: () => {
          this.setState(({ halted }) => ({
            halted: !halted,
          }));
        },
      },
      "Halt"
    );

    const timer = React.createElement(Timer);
    const halted = React.createElement("p", null, "Timer halted");
    return this.state.halted
      ? halted
      : React.createElement("div", null, timer, haltButton);
  }
}

const container = document.getElementById("container");
const timer = React.createElement(HaltableTimer);
ReactDOM.render(timer, container);
