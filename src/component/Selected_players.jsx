import { use } from "react";
import Selected_player from "./Selected_player";

export default function Selected_players({
  selectedPlayers,
  setSelectedPlayers,
  balance,
  setBalance,
  playersPromise,
}) {
  const players = use(playersPromise);
  const selPlayers = players.filter(remain=> selectedPlayers.includes(remain.id))
  return (
    <div className="max-w-7xl mx-auto p-5">
      <div className="grid">
        {selPlayers.map((player) => (
          <Selected_player
            key={player.id}
            player={player}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
            balance={balance}
            setBalance={setBalance}
          />
        ))}
      </div>
    </div>
  );
}
