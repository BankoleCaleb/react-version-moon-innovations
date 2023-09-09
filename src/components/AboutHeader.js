import style from "../styles/AboutHeader.module.css"
import household from "../images/household.png"
import school from "../images/school.png"
import office from "../images/office.png"
import farm from "../images/farm.png"

function AboutHeader() {
  return(
    <>
      <header>
        <div className={`${style.container} ${style["header-container"]}`}>
          <div className={style["header-info"]}>
            <h1>
              We Believe in Making Africa Entirely Habitable
            </h1>
            <p>by providing affordable smart solar technology to households, farms, schools and organizations</p>
            <button>Learn About Us</button>
          </div>

          <div className={style["header-image"]}>
            <div 
              className={`${style["image-ring"]} ${style["ring-one"]}`}
              style={{backgroundImage: `url(${household})`}}
            ></div>

            <div 
              className={`${style["image-ring"]} ${style["ring-two"]}`}
              style={{backgroundImage: `url(${school})`}}
            ></div>
            <div 
              className={`${style["image-ring"]} ${style["ring-three"]}`}
              style={{backgroundImage: `url(${office})`}}
            ></div>
            <div 
              className={`${style["image-ring"]} ${style["ring-four"]}`}
              style={{backgroundImage: `url(${farm})`}}
            ></div>
          </div>
        </div>
      </header>
    </>
  )
}

export default AboutHeader;