import { Link } from "react-router-dom"

import icon from "../images/logo-light.png"
import moon from "../images/crescent.png"

function Navbar({incrementCount, count}) {
  return (
    <nav>
      <div className="container" id="nav">
        <Link to="/" id="logo">
          <img src={icon} alt="our logo" className="logo" />
          <h2>Mooninnovations.io</h2>
        </Link>
        <div id="nav-links">
          <Link to="/blog"><button>Blog</button></Link>
          <Link to="/">Home</Link>
          <Link to="/void">Shop</Link>
        </div>
        <div id="night-mode" onClick={() => incrementCount()}>
          <img src={moon} alt="toggle night mode icon" className="toggle-mode-icon" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar;