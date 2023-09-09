import error from "../images/error.png"
import style from "../styles/Error404.module.css"
// import './App.css';

function Error404() {
  return(
    <main>
      <div className={`${style.image} ${style.container}`}>
        <img src={error} alt="Searching error" className={style.image} />
      </div>
    </main>
  )
}

export default Error404;