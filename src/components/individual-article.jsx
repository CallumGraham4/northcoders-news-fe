import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, getCommentsByArticleId, patchVotes } from "./fetch";
import { Link } from "react-router-dom";
import { CommentsCard } from "./comments-card";

export const IndividualArticle = () => {
  const [individualArticle, setIndividualArticle] = useState({});
  const { article_id } = useParams();
  const articles = "/articles";
  const [comments, setComments] = useState([]);
  const [isArticleLoading, setIsArticleLoading] = useState(true);
  const [isCommentLoading, setIsCommentLoading] = useState(true);
  const [voted, setVoted] = useState(false);
  const [newVoteCount, setNewVoteCount] = useState(0);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getArticleById(article_id).then(({ article }) => {
      setIndividualArticle(article);
      setIsArticleLoading(false);
    });
  }, [article_id]);

  useEffect(() => {
    getCommentsByArticleId(article_id).then(({ comments }) => {
      setComments(comments);
      setIsCommentLoading(false);
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
          <p className="individual-article-comment-count">
            Comments: {individualArticle.comment_count}
          </p>
        </div>
      )}
      {isCommentLoading ? (
        <p>Comments loading</p>
      ) : (
        comments.map((comment) => {
          return <CommentsCard key={comment.comment_id} comment={comment} />;
        })
      )}
      <button className="back-button">
        <Link to="/articles">Back</Link>
      </button>
    </>
  );
};
