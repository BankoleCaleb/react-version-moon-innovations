import { Link } from 'react-router-dom';
import style from "../styles/Blog.module.css"


function BlogBlock(props) {
  const {imgSrc, alt, datePosted, minRead, postTitle, postBody, postedBy, id} = props;
  return(
    <div className={style.block}>
      <div>
        <img className={style["first-image"]} src={imgSrc} alt={alt} />

      </div>
      <div className={style.post}>
        <div className={style["meta-data"]}>
          <span>{datePosted}</span>
          <span>{minRead}</span>
        </div>
        <h2>{postTitle}</h2>
        <p>{postBody}</p>
        <Link to={`/blog/${id}`}><button>Read More</button></Link>
        <p className={style["posted-by"]}>{postedBy}</p>
      </div>
    </div>
  )
}

export default BlogBlock