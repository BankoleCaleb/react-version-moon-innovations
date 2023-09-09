import lightLogo from "../images/logo-light.png"
import twitterIcon from "../images/twitter.png"
import instagramIcon from "../images/instagram.png"
import facebookIcon from "../images/facebook.png"
import linkedinIcon from "../images/linkedin.png"
import { Link } from 'react-router-dom';


function Footer() {
  return(
    <footer>
      <div className="container" id="footer-links">
        <div>
          <div className="footer-logo">
            <img src={lightLogo} alt="our logo" />
            <h2>Moon Innovations</h2>
          </div>
          <p>Our smart inverters provides sustainable energy management and wireless internet accessibility directly to your home.</p>
        </div>
        <div>
          <h2 className="footer-heading">Company</h2>
          <div className="footer-links">
            <Link to="/void">Shop</Link>
            <Link to="/void">About Us</Link>
            <Link to="/void">Contact Us</Link>
            <Link to="/void">Blog</Link>
          </div>
        </div>
        <div>
          <h2 className="footer-heading">Business</h2>
          <div className="footer-links">
            <Link to="/void">Our Team</Link>
            <Link to="/void">Our Clients</Link>
          </div>
        </div>
        <div>
          <h2 className="footer-heading">Contact Us</h2>
          <div className="footer-links">
            <Link to="/void">+234 708 721 0933</Link>
            <Link to="/void">Holla@mooninnovations.io</Link>
          </div>
        </div>
      </div>
      <div id="socials">
        <Link to="/void">
          <img src={twitterIcon} alt="twitter icon" />
          <span>Twitter</span>
        </Link>
        <Link to="/void">
          <img src={instagramIcon} alt="instagram icon" />
          <span>Instagram</span>
        </Link>
        <Link to="/void">
          <img src={facebookIcon} alt="facebook icon" />
          <span>Facebook</span>
        </Link>
        <Link to="/void">
          <img src={linkedinIcon} alt="LinkedIn icon" />
          <span>LinkedIn</span>
        </Link>
      </div>
    </footer>
  )
}

export default Footer;