export const CommentPost = (props) => {
  return (
    <>
      <label className="comment-post-label" htmlFor="comment-post">
        Enter comment here
      </label>
      <textarea
        className="comment-input"
        type="text"
        id="comment-post"
        onChange={props.handleChange}
      />
      {props.formSubmitted ? (
        <p>Thanks!</p>
      ) : (
        <button className="post-comment-button" onClick={props.handleSubmit}>
          Post
        </button>
      )}
      </>
  );
};
