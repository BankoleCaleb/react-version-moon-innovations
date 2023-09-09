import searchingError from "../images/searching-error.png"
import style from "../styles/Error404.module.css"

function SearchingError() {
  return(
    <main>
      <div className={`${style.image} ${style.container}`}>
        <img src={searchingError} alt="Searching error" className={style.image} />
      </div>
    </main>
  )
}

export default SearchingError;