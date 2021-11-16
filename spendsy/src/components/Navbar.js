import {useState} from 'react'

function NavBar() {

  const [loggedIn, setLoggedIn] = useState(false)

  return(
    <>
      <nav className="navbar">
        <span className="navlink">About</span>
        <span className="navlink" onClick={() => setLoggedIn(!loggedIn)}>Login</span>
        <span className="navlink">Sign Up</span>
      </nav>
    </>
  )
}

export default NavBar