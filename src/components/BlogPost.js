import { Link } from 'react-router-dom';
import style from "../styles/BlogPost.module.css"

import heart from "../images/sun-heart.png"
import panel from "../images/pivoted-panel.png"
import facebook from "../images/facebook.png"
import twitter from "../images/twitter.png"
import linkedin from "../images/linkedin.png"
import instagram from "../images/instagram.png"

function BlogPost() {
  const data = {
    postTitle: "Looking to the future: Solar inverters as a sustainable solution for Africa's energy needs",
    datePosted: "March 9, 2023",
    postedBy: "By Thomas Ogun, Content Developer"
  }

  return(
    <main>
      <div className={style.container}>
        <article className={style["article-hidden"]}>

          <h1>Looking to the future: Solar inverters as a sustainable solution for Africa's energy needs</h1>
          <h5 className={style["posted-by"]}>By Thomas Ogun, Content Developer</h5>
          <p className={style["time-of-post"]}>March 9, 2023</p>
          <p className={style.article}>As Africa's energy needs continue to grow, we must seek out smart and sustainable solutions that can meet the current demand. Solar inverters are a promising option in this regard, providing a reliable source of clean energy. Solar inverters convert the direct current (DC) generated by photovoltaic panels into alternating current (AC) which is used to power homes, businesses, and other large-scale infrastructure projects. In this blog post, we will explore the potential of solar inverters as a sustainable solution for Africa's energy needs, looking to the future of renewable energy in the continent.</p>
          <img src={heart} alt="image" />
          <h2>The limitations of traditional energy sources</h2>
          <p className={style.article}>For many African countries, the challenge of providing reliable electricity has been a major one. Unfortunately, most homes and businesses across the continent lack access to reliable energy sources. This creates significant economic and social hurdles for the people of Africa. Thankfully, companies like Moon Innovations are committed to providing a connected and sustainable future for the African continent. They provide an all-in-one system that provides sustainable electricity, internet access, security surveillance, and cloud storage capacity for security surveillance feeds. Using cutting-edge technologies, including artificial intelligence and advanced security protocols, they create an effective way to help provide energy to those who need it most.</p>
          <img src={panel} alt="solar panel" />
          <h2>The current state of affairs</h2>
          <p className={style.article}>As the population in Africa continues to rise, so does the energy demand. Unfortunately, traditional energy sources such as oil and coal are both expensive and unreliable, leading to a lack of security when it comes to the power grid. Furthermore, the sheer size and complexity of the continent mean that many areas are still reliant on antiquated infrastructure and manual labor, making them highly inefficient. To make matters worse, the development of artificial intelligence has led to an increase in demand for computing power, further exacerbating the already existing energy crisis. The current situation is unsustainable, and a more sustainable solution must be found to meet the growing needs of the continent.</p>
        </article>

        <aside className={style["aside-hidden"]}>
          <p className={style["share-article"]}>Share This Article</p>
          <div className={style["share-to-links"]}>

            <Link to="/void">
              <img src={facebook} alt="facebook icon" className={style.facebook} />
            </Link>
            <Link to="/void">
              <img src={twitter} alt="twitter icon" className={style.twitter} />
            </Link>
            <Link to="/void">
              <img src={linkedin} alt="LinkedIn icon" className={style.linkedin} />
            </Link>
            <Link to="/void">
              <img src={instagram} alt="instagram icon" className={style.instagram} />
            </Link>
          </div>

        </aside>
      </div>
    </main>
  )
}

export default BlogPost;