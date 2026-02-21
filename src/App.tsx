import { useState } from 'react'
import './App.css'

import Home from './components/Home/Home'
import { Route, Routes } from 'react-router-dom'
import GameDetails from './components/GameDetails/GameDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/game-details' Component={GameDetails}/>
      </Routes>
    </>
  )
}

export default App
