export const CommentPost = (props) => {
  return (
    <form className="comment-post" action="post-comment">
      <label className="comment-post-label" htmlFor="comment-post">
        Enter comment here
      </label>
      <textarea
        className="comment-input"
        type="text"
        id="comment-post"
        onChange={props.handleChange}
      />
      <button className="post-comment-button" onClick={props.handleSubmit}>
        Post
      </button>
    </form>
  );
};
