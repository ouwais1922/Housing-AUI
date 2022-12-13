import "./navbar.css"
import {Link} from "react-router-dom"
import AUI_Logo from "../../images/AUI_Logo.PNG"
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" className="link">
        <div className="Logo_aui">
          <img src={AUI_Logo} 
          alt="" 
          className="Logo_aui" />
        </div>
        </Link>
        <div className="navItems">
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar