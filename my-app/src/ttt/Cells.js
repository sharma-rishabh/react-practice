import React from "react";

const Cell = ({ value, position, onChange }) => {
  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        border: "1px solid black",
        textAlign: "center",
        lineHeight: "100px",
        fontWeight: 500,
        fontSize: "2em",
      }}
      onClick={value === "" ? () => onChange(position) : null}
    >
      {value}
    </div>
  );
};

const Cells = ({ cells, onChange }) => {
  const cellElements = cells.map((value, index) => (
    <Cell key={index} value={value} position={index} onChange={onChange} />
  ));
  return (
    <div
      style={{
        width: "350px",
        display: "flex",
        flexWrap: "wrap",
        padding: "100px",
      }}
    >
      {cellElements}
    </div>
  );
};

export default Cells;
