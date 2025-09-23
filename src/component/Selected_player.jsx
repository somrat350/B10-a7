import deleteImg from "../assets/delete.png";

export default function Selected_player({player,selectedPlayers,setSelectedPlayers}) {
  
  return (
    <div className="flex items-center justify-between p-2">
      <div className="flex gap-5 items-center">
        <img
          className="rounded-xl h-16 w-16"
          src={player.playerImg}
          alt=""
        />
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-bold">{player.playerName}</h2>
          <span className="text-base text-gray-500 font-semibold">{player.playingRole}</span>
        </div>
      </div>
      <img onClick={()=>deletePlayer(player.id)} className="w-6 h-6 cursor-pointer" src={deleteImg} alt="" />
    </div>
  );

  function deletePlayer(id){
    const deletedPlayers = selectedPlayers.filter(selectedPlayer=> selectedPlayer.id !== id)

    setSelectedPlayers(deletedPlayers)
  }
}
