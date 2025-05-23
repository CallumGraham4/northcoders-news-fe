import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, getCommentsByArticleId, patchVotes, postComment } from "./fetch";
import { Link } from "react-router-dom";
import { ArticleBlock } from "./article-block";
import { CommentBlock } from "./comment-block";

export const IndividualArticle = () => {
  
  const [individualArticle, setIndividualArticle] = useState({});
  const { article_id } = useParams();

  const [isArticleLoading, setIsArticleLoading] = useState(true);

  const [voted, setVoted] = useState(false);
  const [newVoteCount, setNewVoteCount] = useState(0);

  const [isError, setIsError] = useState(false);




  useEffect(() => {
    getArticleById(article_id).then(({ article }) => {
      setIndividualArticle(article);
      setIsArticleLoading(false);
    });
  }, [article_id]);


  function upVote() {
    const newVote = 1;
    if (!voted) {
      setVoted(true);
      setNewVoteCount(individualArticle.votes + 1);
      patchVotes(article_id, newVote).catch(() => {
        setIsError(true);
        setVoted(false);
      });
    }
  }

   function downVote() {
    const newVote = -1;
    if (!voted) {
      setVoted(true);
      setNewVoteCount(individualArticle.votes - 1);
      patchVotes(article_id, newVote).catch(() => {
        setIsError(true);
        setHasVoted(false);
      });
    }
  }

  return (
    <>
      {isArticleLoading ? (
        <p>Article loading</p>
      ) : (
        <div className="article">
           <ArticleBlock
            individualArticle={individualArticle}
            voted={voted}
            newVoteCount={newVoteCount}
          />
          {voted ? (
            <p className="vote-thanks">Thanks for voting!</p>
          ) : isError ? (
            <p className="vote-error">Something went wrong. Please try again later.</p>
          ) : (
            <p className="article-vote-buttons">
              Did you enjoy this article?
              <button className="vote-button" onClick={upVote}>
                Yes
              </button>
               <button className="vote-button" onClick={downVote}>
                No
              </button>
            </p>
          )}
        </div>
      )}
      <CommentBlock article_id={article_id} />
       <button className="back-button">
        <Link to="/articles">Back</Link>
      </button>
    </>
  );
};

