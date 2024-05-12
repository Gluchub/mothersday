import React from 'react'
import {Route, Routes, BrowserRouter as Router} from "react-router-dom"
import Navbar from './components/Navbar'
import Home from "./pages/Home"
import Memories from "./pages/Memories"
const App = () => {
  return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='memories/' element={<Memories/>}/>
        </Routes>
      </Router>
    </main>
  )
}

export default App