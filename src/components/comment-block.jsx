import { useEffect, useState } from "react";
import { getCommentsByArticleId, postComment } from "./fetch";
import { CommentsCard } from "./comments-card";
import { CommentPost } from "./comment-post";

export const CommentBlock = ({ article_id }) => {
    
    const username = "grumpy19"
    const [comments, setComments] = useState([]);
    const [isCommentLoading, setIsCommentLoading] = useState(true);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [commentError, setCommentError] = useState(false);
    const [newCommentPosted, setNewCommentPosted] = useState({});
    const [newComment, setNewComment] = useState({});

    useEffect(() => {
    setIsCommentLoading(true);
    getCommentsByArticleId(article_id).then(({ comments }) => {
      setComments(comments);
      setIsCommentLoading(false);
    });
  }, [article_id]);

  function handleChange(e) {
    e.preventDefault();
    setNewCommentPosted({ username: username, body: e.target.value });
  }

   function handleSubmit() {
    setFormSubmitted(true);
    setNewComment(
      <div className="comment-card">
        <p className="comment-info">Just now</p>
        <p className="comment-info">{newCommentPosted.username} said:</p>
        <p className="comment-body">{newCommentPosted.body}</p>
        <p className="comment-info">Votes: 0</p>
      </div>
    );

        postComment(article_id, newCommentPosted)
      .then(({ comment }) => {
        setNewCommentPosted({});
      })
      .catch((err) => {
        setFormSubmitted(false);
        setCommentError(true);
      });
  }

return (
    <>
    {isCommentLoading ? null : (
        <p className="article-info">Comments: {comments.length}</p>
      )}
    {commentError ? (
        <p className="post-comment-error">Something went wrong. Please try again later.</p>
      ) : null}
      {formSubmitted ? (
    newComment
      ) : (
        <form action={handleSubmit} className="comment-post">
          <CommentPost
            article_id={article_id}
            formSubmitted={formSubmitted}
            handleChange={handleChange}
          />
        </form>)}
        
      {isCommentLoading ? (
        <p>Comments loading</p>
      ) : (
        comments.map((comment) => {
          return (
            <CommentsCard
              key={comment.comment_id}
              comment={comment}
              username={username}
            />
          );
        })
      )}
      
    </>
  );

}