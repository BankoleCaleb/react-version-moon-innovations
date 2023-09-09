import style from "../styles/Home.module.css"

function TestimonyCard({src, name, testimony}) {
  return(
    <>
      <div className={style["testimony-card-background"]}>
      <div className={style["testimony-card"]}>
          <img src={src} alt="" />
          <h3 className={style.testifier}>{name}</h3>
          <p className={style.testimony}>{testimony}</p>
        </div>
      </div>
    </>
  )
}

export default TestimonyCard