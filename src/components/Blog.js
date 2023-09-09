import BlogBlock from "./BlogBlock"

import style from "../styles/Blog.module.css"

import solar from "../images/solar-energy.png"
import brain from "../images/brain.png"
import panel from "../images/carried-panel.png"
import house from "../images/colorless-house.png"

function Blog() {
  // {imgSrc, alt, datePosted, minRead, postTitle, postBody, postedBy, id}
  return(
    <main>
      <div className={style.container}>
        <BlogBlock 
          id="1234"
          imgSrc={solar}
          alt="Solar energy"
          datePosted="March 9, 2023"
          minRead="5 Minute Read"
          postTitle="Looking to the future: Solar inverters as a sustainable solution for Africa's energy needs"
          postBody="Our smart inverters provides sustainable energy management and wireless internet accessibility directly to your home."
          postedBy="By Thomas Ogun, Content Developer"
        />
        <BlogBlock 
          id="1234"
          imgSrc={brain}
          alt="Artificial Intelligence"
          datePosted="March 9, 2023"
          minRead="5 Minute Read"
          postTitle="Looking to the future: Solar inverters as a sustainable solution for Africa's energy needs"
          postBody="Our smart inverters provides sustainable energy management and wireless internet accessibility directly to your home."
          postedBy="By Thomas Ogun, Content Developer"
        />
        <BlogBlock 
          id="1234"
          imgSrc={panel}
          alt="solar panel"
          datePosted="March 9, 2023"
          minRead="5 Minute Read"
          postTitle="Looking to the future: Solar inverters as a sustainable solution for Africa's energy needs"
          postBody="Our smart inverters provides sustainable energy management and wireless internet accessibility directly to your home."
          postedBy="By Thomas Ogun, Content Developer"
        />
        <BlogBlock 
          id="1234"
          imgSrc={house}
          alt="Smart home"
          datePosted="March 9, 2023"
          minRead="5 Minute Read"
          postTitle="Looking to the future: Solar inverters as a sustainable solution for Africa's energy needs"
          postBody="Our smart inverters provides sustainable energy management and wireless internet accessibility directly to your home."
          postedBy="By Thomas Ogun, Content Developer"
        />
      </div>
    </main>
  )
}

export default Blog