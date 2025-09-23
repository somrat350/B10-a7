import { use } from "react";
import Player from "./Player";

export default function Players({playersPromise,balance,setBalance,selectedPlayers,setSelectedPlayers}) {
  const players = use(playersPromise)

  const remaining = players.filter(remain=> !selectedPlayers.includes(remain))
  // setAllPlayers(remaining)
  
  return (
    <div className="max-w-7xl mx-auto p-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {
        remaining.map(player=>{
          return <Player key={player.id} player={player} balance={balance} setBalance={setBalance} setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers}/>
        })
      }
    </div>
  );
}
