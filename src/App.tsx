import './App.css'

import Home from './components/Home/Home'
import { Route, Routes } from 'react-router-dom'
import GameDetails from './components/GameDetails/GameDetails'

function App() {

  return (
    <>
      <Routes>
        <Route path='/ghcd' element={<Home/>} />
        <Route path='/game-details' Component={GameDetails}/>
      </Routes>
    </>
  )
}

export default App
