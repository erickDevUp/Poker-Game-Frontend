import React from "react";
import "./PlayerCard.css"; // Asegúrate de tener este archivo CSS en tu proyecto
import Card from "../card";

const PlayerCard = ({ player, id,isPlayer }) => {
  return (
    <div className="player-card">
      <img
        src={`./image/profile${id}.jpg`}
        alt={player.name}
        className="player-image"
      />
      <div className="player-info">
        <div>
          {player?.cards?.map((card, index) => (
            <Card key={index} card={isPlayer?[card]:null} />
          ))}
        </div>
        <p>{player.name ? player.name.toUpperCase() : "PLAYER" + id}</p>
        <p>{player.money}$</p>
      </div>
    </div>
  );
};

export default PlayerCard;
