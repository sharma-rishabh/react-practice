import React from "react";

const Pokemon = ({ name, imageUrl }) => {
  return (
    <div>
      <p>{name}</p>
      <img src={imageUrl} alt={name} />
    </div>
  );
};

export default Pokemon;
