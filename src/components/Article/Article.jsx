/* eslint-disable react/prop-types */
import "./article.css";

function Article({ title, descr }) {
  return (
    <div className="article">
      <h3 className="article__title">{title}</h3>

      <div className="article__descr">
        {descr.map((text,i) => (
          <p key={i}>{text}</p>
        ))}
      </div>
    </div>
  );
}

export default Article;
