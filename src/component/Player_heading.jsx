export default function Player_heading({selectedPlayers,availablePlayers,setAvailablePlayers}) {
  return (
    <div className="flex items-center justify-between max-w-7xl mx-auto mt-10 p-5">
      <h2 className="text-lg sm:text-2xl font-bold">{availablePlayers?"Available Players":`Selected Player (${selectedPlayers.length}/6)`}</h2>
      <div className="join join-vertical sm:join-horizontal rounded-sm w-fit border border-gray-300 overflow-hidden text-base">
        <button onClick={()=>setAvailablePlayers(true)} className={`px-4 py-2 font-bold cursor-pointer join-item  ${availablePlayers?"bg-amber-300":"text-gray-500"}`}>Available</button>
        <button onClick={()=>setAvailablePlayers(false)} className={`px-4 py-2 font-bold cursor-pointer join-item  ${availablePlayers===false?"bg-amber-300":"text-gray-500"}`}>Selected (<span>{selectedPlayers.length}</span>)</button>
      </div>
    </div>
  );
}
