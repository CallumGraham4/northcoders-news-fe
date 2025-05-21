import { ArticlesCard } from "./articles-card";
import { useEffect, useState } from 'react'
import { getArticles } from "./fetch";


export const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticles().then((response) => {
      setArticles(response);
      setLoading(false);
    });
  }, []);

  return (
    <div className="articles-list">
      {loading ? 
            (<p>Loading articles...</p>) 
            : articles.length === 0 ? (<p>No articles found.</p>) 
            : articles.map((article) => (
          <ArticlesCard key={article.article_id} article={article} />
        ))}
    </div>
  );
};
