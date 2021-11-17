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
        
          <button className="navlink" onClick={() => setLoggedIn(!loggedIn)}>{loggedIn ? <Link to='/'>Logout</Link> : <Link to= "/login">'Login'</Link>}</button>
        
        <button className="navlink">Sign Up</button>
      </nav>
    </>
  )
}
export default NavBar