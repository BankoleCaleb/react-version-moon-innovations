import team from "../images/team.png"
import group from "../images/group.png"
import memberOne from "../images/member-one.png"
import memberTwo from "../images/member-two.png"
import memberThree from "../images/member-three.png"
import memberFour from "../images/member-four.png"
import memberFive from "../images/person-five.png"
import memberSix from "../images/person-six.png"
import memeberSeven from "../images/person-seven.png"
import memberEight from "../images/person-eight.png"
import memberNine from "../images/person-nine.png"
import memberTen from "../images/person-ten.png"

import style from "../styles/About.module.css"

function About() {
  return(
    <main>
      <section>
        <div className={`${style.container} ${style["about-section"]}`}>
          <div className={style.description}>
            <h2>WHO WE ARE</h2>
            <p>We are the nation's first smart solar inverter package producers, offering smart AI solutions to households, farmlands, schools and organizations. We supply to our clients the 3-in-1 package of an inverter, security camera and Wi-Fi, delivering an incredible experience that substitutes grids and exorbitant power subscriptions.  </p>
          </div>

          <img src={group} alt="static animation of a group of three people sitting round a table" />
        </div>
      </section>

      <section>
        <div className={`${style.container} ${style["about-section"]}`}>
          <div className={style.description}>
            <h2>OUR MISSION</h2>
            <p>Moon Innovations MISSION is to provide affordable, smart, and sustainable solar solutions, for low-mid income homes and businesses all around the world.</p>
          </div>
          <img src={team} alt="static animation of a group of three people each holding a smart device" />
        </div>
      </section>

      <section>
        <div className={style.container}>
          <h2 className={style.center}>OUR TEAM</h2>
          <p className={style.center}>We have an engineering  team of seasoned professionals working in different departments to make our products usable. </p>
          <div className={style.partners}>
            <img src={memberOne} alt="one of our team member" />
            <img src={memberTen} alt="one of our team member" />
            <img src={memberThree} alt="one of our team member" />
            <img src={memberFour} alt="one of our team member" />
            <img src={memberFive} alt="one of our team member" />
            <img src={memberSix} alt="one of our team member" />
            <img src={memeberSeven} alt="one of our team member" />
            <img src={memberEight} alt="one of our team member" />
            <img src={memberNine} alt="one of our team member" />
            <img src={memberTen} alt="one of our team member" />
          </div>
        </div>
      </section>
    </main>
  )
}

export default About;