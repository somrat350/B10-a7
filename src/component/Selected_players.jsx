import { use } from "react";
import Selected_player from "./Selected_player";

export default function Selected_players({
  selectedPlayers,
  setSelectedPlayers,
  balance,
  setBalance,
  playersPromise,
  setAvailablePlayers
}) {
  const players = use(playersPromise);
  const selPlayers = players.filter((remain) =>
    selectedPlayers.includes(remain.id)
  );
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
      <div className="mt-10 border border-red-500 rounded-xl p-1 w-fit">
        <button className="bg-amber-300 rounded-xl text-base font-medium px-5 py-2 cursor-pointer" onClick={()=>setAvailablePlayers(true)}>
           Add More Player
        </button>
      </div>
    </div>
  );
}
