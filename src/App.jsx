import { Suspense, useState } from 'react'
import './App.css'
import Hero from './component/Hero'
import Navbar from './component/Navbar'
import Player_heading from './component/Player_heading'
import Players from './component/Players'
import Selected_players from './component/Selected_players'
import Loading from './component/Loading'
import { getBalance, setBalanceLocal, getItem, setItem } from './localstorage'

const playersPromise = fetchData("https://raw.githubusercontent.com/somrat350/B10-a7/refs/heads/main/public/players.json")

function App() {


  const [availablePlayers,setAvailablePlayers] = useState(true)
  const [balance,setBalance] = useState(getBalance())
  const [selectedPlayers,setSelectedPlayers] = useState(getItem())

  setItem(selectedPlayers)
  setBalanceLocal(balance)

  return (
    <>
      <Navbar balance={balance}/>
      <Hero/>
      <Player_heading selectedPlayers={selectedPlayers} availablePlayers={availablePlayers} setAvailablePlayers={setAvailablePlayers}/>

      {
        availablePlayers?<Suspense fallback={<Loading/>}>
        <Players selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} playersPromise={playersPromise} balance={balance} setBalance={setBalance}/>
      </Suspense>:<Suspense fallback={<Loading/>}>
        <Selected_players setAvailablePlayers={setAvailablePlayers} balance={balance} setBalance={setBalance} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} playersPromise={playersPromise}/>
      </Suspense>
      }
      
    </>
  )
}

function fetchData(url){
  return fetch(url).then(res=>res.json());
}

export default App
