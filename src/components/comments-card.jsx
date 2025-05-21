export const CommentsCard = ({comment}) => {
    return (
        <div className="comments-card">
        <p className="comment-created-at">{comment.created_at}</p>
        <p className="comment-author">{comment.author}</p>
        <p className="comment-votes">Votes: {comment.votes}</p>
        <p className="comment-body">{comment.body}</p>
</div>
    )
}