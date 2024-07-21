import React from "react";

const Player = ({ name, symbol }) => {
  return (
    <div>
      {name}: {symbol}
    </div>
  );
};

const Players = ({ players: [player1, player2] }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <Player name={player1.name} symbol={player1.symbol} />
      <Player name={player2.name} symbol={player2.symbol} />
    </div>
  );
};

export default Players;
