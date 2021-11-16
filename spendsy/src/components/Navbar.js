import {useState} from 'react'

function NavBar({handleLogin}) {

  return(
    <>
      <nav className="navbar">
        <span className="navlink">About</span>
        <span className="navlink" onClick={() => handleLogin()}>Login</span>
        <span className="navlink">Sign Up</span>
      </nav>
    </>
  )
}

export default NavBar