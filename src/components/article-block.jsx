 export const ArticleBlock = ({individualArticle, voted, newVoteCount}) => {
 
 return (
    <>
    <h2 className="individual-article-title">{individualArticle.title}</h2>
          <p className="individual-article-author">Author: {individualArticle.author}</p>
          <p className="individual-article-date">
            Created at: {individualArticle.created_at}
          </p>
          <p className="individual-article-body">{individualArticle.body}</p>
            {voted ? (
            <p className="individual-article-votes">Votes: {newVoteCount}</p>
          ) : (
            <p className="individual-article-votes">Votes: {individualArticle.votes}</p>
          )}
          </>
        )}