import React, { useState } from "react";

const Player = ({ name, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleClick = () => {
    setIsEditing(!isEditing);
  };

  let playerName = <span className="player-name">{name}</span>;
let btnCaption ='Edit'
  if (isEditing) {
    playerName = <input type="text" required value={name} />;
    btnCaption = 'Save'
  }
  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleClick}>{btnCaption}</button>
      </span>
    </li>
  );
};

export default Player;
