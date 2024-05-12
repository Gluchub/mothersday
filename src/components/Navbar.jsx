import React from 'react'
import { NavLink } from 'react-router-dom'
import "../styles/Navbar.css"
const Navbar = () => {
  return (
    <nav class="navbar">
        <div class="nav-shape"></div>
        <div class="nav-items">
          <NavLink to="/"><div class="rise"><div class="ar">Home</div></div></NavLink>
          <NavLink to="memories/"><div class="rise"><div class="ar">Memories</div></div></NavLink>
        </div>
    </nav>
  )
}

export default Navbar