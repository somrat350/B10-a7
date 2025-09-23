export default function Player_heading({selectedPlayers,availablePlayers,setAvailablePlayers}) {
  return (
    <div className="flex items-center justify-between max-w-7xl mx-auto mt-10 p-5">
      <h2 className="text-3xl font-bold">{availablePlayers?"Available Players":`Selected Player (${selectedPlayers.length}/6)`}</h2>
      <div className="join rounded-xl w-fit border border-gray-300 overflow-hidden text-base">
        <button onClick={()=>setAvailablePlayers(true)} className={`px-5 py-3 font-bold cursor-pointer join-item  ${availablePlayers?"bg-amber-300":"text-gray-500"}`}>Available</button>
        <button onClick={()=>setAvailablePlayers(false)} className={`px-5 py-3 font-bold cursor-pointer join-item  ${availablePlayers===false?"bg-amber-300":"text-gray-500"}`}>Selected (<span>{selectedPlayers.length}</span>)</button>
      </div>
    </div>
  );
}
