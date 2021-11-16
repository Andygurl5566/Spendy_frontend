import {useState} from 'react'
import {Link} from 'react-router-dom'

function NavBar({handleLogin}) {

  const [loggedIn, setLoggedIn] = useState(true)

  return(
    <>
      <nav className="navbar">
        <Link to='/'>
          <button className="navlink">Home</button>
        </Link>
        <Link to='/wallet/page'>
          <button className="navlink" onClick={() => setLoggedIn(!loggedIn)}>{loggedIn ? 'Logout' : 'Login'}</button>
        </Link>
        <button className="navlink">Sign Up</button>
      </nav>
    </>
  )
}
export default NavBar