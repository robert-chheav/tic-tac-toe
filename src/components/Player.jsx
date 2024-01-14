import React, { useState } from "react";

const Player = ({ name, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleClick = () => {
    setIsEditing(true);
  };

  let playerName = <span className="player-name">{name}</span>;

  if (isEditing) {
    playerName = <input type="text" required />;
  }
  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleClick}>Edit</button>
      </span>
    </li>
  );
};

export default Player;
