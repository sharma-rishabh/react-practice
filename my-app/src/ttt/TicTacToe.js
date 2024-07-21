import React from "react";
import Cells from "./Cells";
import Players from "./Players";

const game = {
  players: [
    { name: "Player 1", symbol: "X" },
    { name: "Player 2", symbol: "O" },
  ],
  currentPlayerIndex: 0,
  cells: ["X", "X", "", "O", "", "", "O", "", "X"],
  winnerIndex: -1,
};

const WinBanner = ({ winner }) => {
  return (
    <div style={{ textAlign: "center", fontSize: "2em" }}>
      {`${winner} wins!`}
    </div>
  );
};

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = game;
    this.handleChange = this.handleChange.bind(this);
  }

  getWinnerIndex(cells) {
    const { players } = game;

    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;

      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        const winnerSymbol = cells[a];
        const winnerIndex = players.findIndex(
          (player) => player.symbol === winnerSymbol
        );

        return winnerIndex;
      }
    }
    return -1;
  }

  handleChange = (position) => {
    const { cells, currentPlayerIndex } = this.state;
    const newCells = cells.slice();
    newCells[position] = this.state.players[currentPlayerIndex].symbol;
    const winnerIndex = this.getWinnerIndex(newCells);
    console.log(winnerIndex);
    this.setState((state) => ({
      cells: newCells,
      currentPlayerIndex: 1 - currentPlayerIndex,
      winnerIndex: winnerIndex,
    }));
  };

  render() {
    return (
      <div style={{ width: "600px", margin: "0 auto" }}>
        <Players players={this.state.players} />
        <Cells cells={this.state.cells} onChange={this.handleChange} />
        {this.state.winnerIndex > -1 ? (
          <WinBanner winner={this.state.players[this.state.winnerIndex].name} />
        ) : null}
      </div>
    );
  }
}

export default TicTacToe;
