import { ArticlesCard } from "./articles-card";

export const ArticlesList = ({ articles }) => {
  console.log(articles)
  return (
    <div className="articles-list">
      <div className="articles-container">
        {articles.map((article) => (
          <ArticlesCard
            key={article.article_id}
            article_id={article.article_id}
            title={article.title}
            article_img_url={article.article_img_url}
            author={article.author}
            topic={article.topic}
            created_at={article.created_at}
            votes={article.votes}
            comment_count={article.comment_count}
          />
        ))}
      </div>
    </div>
  );
};
