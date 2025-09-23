
import Selected_player from "./Selected_player";

export default function Selected_players({
  selectedPlayers,
  setSelectedPlayers,
}) {
  return (
    <div className="max-w-7xl mx-auto p-5">
      <div className="grid">
        {
          selectedPlayers.map(player=><Selected_player key={player.id} player={player} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} />)
        }
      </div>
    </div>
  );
}
