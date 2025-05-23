import { useState } from "react";
import { deleteComment } from "./fetch";

export const CommentsCard = ({ comment, username }) => {
  const [deleted, setDeleted] = useState(false);
  const [commentToDelete, setCommentToDelete] = useState("");
  const [isDeleteError, setIsDeleteError] = useState(false);


  function handleDelete(e) {     
    setCommentToDelete(<p>Comment deleted!</p>)
    setDeleted(true)
    deleteComment(comment.comment_id)
      .then(() => {
        setIsDeleteError(false);
      })
      .catch(() => {
        setDeleted(false);
        setIsDeleteError(true);
      });
  }

  return (
    <div className="comments-card">
        {deleted ? commentToDelete : <>

      <p className="comment-created-at">{comment.created_at}</p>
      <p className="comment-author">{comment.author}</p>
      <p className="comment-votes">Votes: {comment.votes}</p>
      <p className="comment-body">{comment.body}</p>
       {username === comment.author ? (
          <button onClick={handleDelete}>Delete</button>
        ) : null}
        </>}
           {isDeleteError ? (
        <p className="comment-error">
          Something went wrong. Please try again later.
        </p>
      ) : null}
    </div>
  );
};
