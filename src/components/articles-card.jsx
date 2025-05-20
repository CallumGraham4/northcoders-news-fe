export const ArticlesCard = ({
  article_id,
  author,
  title,
  topic,
  created_at,
  votes,
  article_img_url,
  comment_count,
}) => {
  return (
    <div className="articles-card">
      <img
        src={article_img_url}
        alt={`article image of ${title}`}
        className="article-image"
      ></img>
      <div className="article-details">
        <h3 className="article-title">{title}</h3>
        <p className="author">Author: {author}</p>
        <p className="topic">Topic: {topic}</p>
        <p className="created-at">Created at: {created_at}</p>
        <p className="votes">Votes: {votes}</p>
        <p className="comment-count">Comment count: {comment_count}</p>
        <p className="article-id">Article id: {article_id}</p>
      </div>
    </div>
  );
};
