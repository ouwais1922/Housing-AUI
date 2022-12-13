import "./navbar.css"
import {Link} from "react-router-dom"
import AUI_logo from "../../images/AUI_Logo.PNG"
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" className="link">
        <div className="logoImg">
        <img
          src={AUI_logo}
          alt=""
          className="logo"
        />
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