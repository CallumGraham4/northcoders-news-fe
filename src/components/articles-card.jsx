import { Link } from "react-router-dom";

export const ArticlesCard = ({article}) => {
  const individualLink = "/articles/" + article.article_id;
  return (
    <div className="articles-card">
      <li>
      <img
        src={article.article_img_url}
        alt={`article image of ${article.title}`}
        className="article-image"
      ></img>
      <div className="article-details">
        <h3 className="article-title">{article.title}</h3>
        <p className="author">Author: {article.author}</p>
        <p className="topic">Topic: {article.topic}</p>
        <p className="created-at">Created at: {article.created_at}</p>
      </div>
      <button className="read-article-button">
        <Link to={individualLink}>Read</Link>
      </button>
      </li>
    </div>
  );
};
