import TestimonyCard from "./TestimonyCard"
import style from "../styles/Home.module.css"

import house from "../images/house.png"
import inverter from "../images/inverter-box.png"
import cameraOne from "../images/camera-one.png"
import cameraTwo from "../images/camera-two.png"
import cameraThree from "../images/camera-three.png"
import wifi from "../images/wifi-access.png"
import AI from "../images/ai.png"
import android from "../images/android.png"
import apple from "../images/apple.png"
import moonApp from "../images/moon-app.png"
import total from "../images/total-energies.png"
import nvida from "../images/nvida.png"
import autodesk from "../images/autodesk.png"
import sahara from "../images/sahara-foundation.png"
import flapmax from "../images/flapmax.png"
import aws from "../images/aws.png"
import orangeCorner from "../images/orange-coners.png"
import leapAfrica from "../images/leap-africa.png"
import julia from "../images/julia.png"
import juliaBoy from "../images/julia-boy.png"
import juliaGirl from "../images/julia-girl.png"



function HomePage() {
  return(
    <main>
      <section>
        <div className={style.container}>
          <h2>Sustaining Your Homes And Businesses</h2>
          <img src={house} alt="smart house" />
          <p className={style.caption}>We believe everyone deserves accessibility to constant, uninterrupted power supply, security and data access,  that is why we made THE SMART SOLAR INVERTER to provide a 3-in-1 package for you.</p>
        </div>
      </section>

      <section>
        <div className={`${style.container} ${style.inverter}`}>
          <h2>The Smart Solar Inverter Box</h2>
          <div className={style.table}>
            <div className={style.column}>
              <img src={inverter} alt="inverter box hanged on the wall" className={style.demacated} />
              <p>The Smart Solar Inverter Box</p>
              <button>I Want an Inverter</button>
            </div>
            <div className={style.column}>
              <p>Our smart inverters provides sustainable energy management and wireless internet accessibility directly to your home.</p>
              <p>Our smart inverters provides sustainable energy management and wireless internet accessibility directly to your home.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={`${style.container} ${style.inverter}`}>
          <h2>Leveraging On The Power Of Security Surveillance</h2>
          <div className={style.table}>
            <div className={style.column}>
              <div className={`${style["image-grid"]} ${style.demacated}`}>
                <img src={cameraOne} alt="CCTV surveillance camera" />
                <img src={cameraTwo} alt="CCTV surveillance camera" />
                <img src={cameraThree} alt="CCTV surveillance camera" />
              </div>
              <p>Our Security Surveillance are specially built to monitor your home and business 24 hours a day, seven days a week, using a cutting-edge facial and person recognition algorithm while providing multiple-viewing options through our mobile application.</p>
            </div>
            <div className={style.column}>
              <p>“There are people  who are always going to try to engage in illegal activities, and they are going to try to subvert surveillance. But we should not give up our rights to privacy because some people are going to engage in criminal activities.”</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={style.container}>
          <p className={style.center}>Internet Connection</p>
          <h2 className={style.center}>Wi-Fi Access</h2>
          <img src={wifi} alt="cool AI image" />
          <p className={style.caption}>Together with the smart inverter package, there is the access to routers that provies wireless internet connection for various devices you have. </p>
        </div>
      </section>

      <section>
        <div className={style.container}>
          <p className={style.center}>Enjoy AI, Absolutely</p>
          <h2 className={style.center}>Artificial Intelligence</h2>
          <img src={AI} alt="cool AI image" />
          <p className={style.caption}>We employ artificial intelligence through the Internet of Things (AIOT) via our edge-cloud technology. Providing a wealth of applications for your needs, through seamless deployment architecture - energy management, security, retail, farming, and health. </p>
        </div>
      </section>

      <section>
        <div className={style.container}>
          <p className={style.center}>We Have A Mobile App</p>
          <h2 className={style.center}>The Moon App</h2>

          <div className={style["moon-app"]}>
            <div className={`${style.demacated} ${style["moon-app-cta"]}`}>
              <p>Ever heard about smart houses?</p>
              <p>Moon app has been developed to help you monitor your home. </p>
              <p>Your Inverter, Wi-Fi and Security Cameras can all be in check when you use the moon app.</p>
              <button>
                <img src={apple} alt="an iphone apple icon" className={style.apple} />
                <span>Download App</span>
              </button>
              <button>
                <img src={android} alt="android icon" className={style.android} />
                <span>Download App</span>
              </button>
            </div>
            <div className={style["app-screenshot"]}>
              <img src={moonApp} alt="screenshot of our app" className={style.screenshot} />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={style.container}>
          <h2 className={style.center}>Our Partners</h2>
          <p className={style.center}>We work with prestigious partners from across the globe - angel investors, VCs, start-ups and global brands. </p>
          <div className={style.partners}>
            <img src={total} alt="one of our partners" />
            <img src={nvida} alt="one of our partners" />
            <img src={sahara} alt="one of our partners" />
            <img src={autodesk} alt="one of our partners" />
            <img src={flapmax} alt="one of our partners" />
            <img src={aws} alt="one of our partners" />
            <img src={orangeCorner} alt="one of our partners" />
            <img src={leapAfrica} alt="one of our partners" />
          </div>
        </div>
      </section>

      <section>
        <div className={style.container}>
          <h2 className={style.center}>Testimonials</h2>
          <p className={style.center}>We work with prestigious partners from across the globe - angel investors, VCs, start-ups and global brands.</p>
          <div className={style.testimonials}>
            <TestimonyCard 
              name="- Julia Dock" 
              src={julia} 
              testimony={`“An innovation that leverages on artificial intelligence in providing smart inverters, security cameras and management services in the most affordable rate for everyone.”`}
            />
            <TestimonyCard 
              name="- Julia Dock" 
              src={juliaBoy} 
              testimony={`“An innovation that leverages on artificial intelligence in providing smart inverters, security cameras and management services in the most affordable rate for everyone.”`}
            />
            <TestimonyCard 
              name="- Julia Dock" 
              src={juliaGirl} 
              testimony={`“An innovation that leverages on artificial intelligence in providing smart inverters, security cameras and management services in the most affordable rate for everyone.”`}
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage;