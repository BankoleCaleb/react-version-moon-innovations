import sunlight from "../images/sunlight.png"
import pinholeCamera from "../images/pinhole-camera.png"
import cylinder from "../images/skewed-cylinder.png"

import style from "../styles/Header.module.css"
import { Link } from 'react-router-dom';

function HomeHeader() {
  return(
    <>
      <header>
        <div className={`${style.container} ${style["header-container"]}`}>
          <h1>
            Smart Solar Inverter <br />
            <img src={pinholeCamera} alt="box camera" />
            And Security
            <img src={sunlight} alt="a sunlight icon" />
          </h1>
          <div className={style.tags}>
            <span>Sustainable Energy.</span>
            &nbsp;&nbsp;
            <span>Security.</span>
            &nbsp;&nbsp;
            <span>Internet.</span>
            &nbsp;&nbsp;
            <span>Africa.</span>
            &nbsp;&nbsp;
          </div>
          <Link to="/about"><button>Learn About Us</button></Link>
          <img className={style.image} src={cylinder} alt="a glowing cylinder just for decoration" />
        </div>
      </header>
      
    </>
  )
}

export default HomeHeader