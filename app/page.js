"use client"

import { useState, useEffect } from "react"
import Coins from "./components/Coins"


export default function Home() {
  const [coins, setCoins] = useState([])

  useEffect(()=> {
    const getCoins = async () => {
      const response = await fetch('/api/coins')
      const coins = await response.json()
      setCoins(coins.data.coins)
    }

    getCoins()
  }, [])  // just one time like componentDidmount,[]

  return (
    <div className="text-center"> 
      <h1 className="font-bold text-4xl mt-14"> Crypto coins </h1>
      <br></br>
      <Coins coins={coins}/>
    </div>
  )
}
