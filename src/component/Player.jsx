import userImg from '../assets/user-img.png';
import flagImg from '../assets/flag.png';
import { useState } from 'react';

export default function Player({player,balance,setBalance,selectedPlayers,setSelectedPlayers}) {

  const [selected,setSelected] = useState(false)

  function choosePlayer(player){
    if(balance<player.price){
      alert("You don't have enough balance!")
      return;
    }else if(selectedPlayers.length>=6){
      alert("Maximum select 6 players!")
      return;
    }

    setSelectedPlayers([...selectedPlayers,player.id])

    const newBalance = balance-player.price
    setBalance(newBalance)
    setSelected(true)
  }

  return (
    <div className="p-5 border border-gray-300 rounded-xl">
      <figure className=''>
        <img
          className="rounded-xl w-full h-60 object-cover"
          src={player.playerImg}
          alt="Shoes"
        />
      </figure>
      <div className="mt-5">
        <div className="flex items-center gap-3">
          <img className="h-6 w-6" src={userImg} alt="" />
          <h2 className="text-xl font-semibold">{player.playerName}</h2>
        </div>
        <div className="flex justify-between items-center border-b border-gray-300 pb-3 mb-3">
          <div className="flex items-center gap-3">
            <img className="h-5 w-5" src={flagImg} alt="" />
            <span className="text-gray-400 text-base font-normal">{player.playerCountry}</span>
          </div>
          <span className="px-4 py-2 bg-gray-200 rounded-lg text-base">{player.playingRole}</span>
        </div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-base font-bold">Rating</span>
          <span>{player.rating}</span>
        </div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-base font-bold">{player.battingStyle}</span>
          <span className="text-base font-semibold text-gray-400">{player.bowlingStyle}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-base font-bold">Price: ${player.price}</span>
          <button className={`border border-gray-300 px-4 py-2 text-sm font-medium rounded-xl cursor-pointer ${selected?"text-gray-600 cursor-text":"btn"}`} disabled={selected} onClick={()=>choosePlayer(player)}>{selected?"Selected":"Choose Player"}</button>
        </div>
      </div>
    </div>
  );
}
