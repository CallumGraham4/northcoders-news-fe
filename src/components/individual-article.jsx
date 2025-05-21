import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, getCommentsByArticleId } from "./fetch";
import { Link } from "react-router-dom";
import { CommentsCard } from "./comments-card";


export const IndividualArticle = () => {
    const [individualArticle, setIndividualArticle] = useState({});
    const {article_id} = useParams();
    const articles = "/articles";
    const [comments, setComments] = useState([]);
    const [isArticleLoading, setIsArticleLoading] = useState(true);
    const [isCommentLoading, setIsCommentLoading] = useState(true);  

    useEffect(() => {
        getArticleById(article_id).then(({article}) => {
            setIndividualArticle(article)
            setIsArticleLoading(false);
        })
    }, [article_id])

    useEffect(() => {
        getCommentsByArticleId(article_id).then(({ comments }) => {
          setComments(comments);
          setIsCommentLoading(false);
        });
      }, [article_id]);

    return (
        <div className="indvidual-article-wrapper">
        {isArticleLoading ? (
        <p>Article loading</p>
      ) : ( 
        <div className="article">
        <h2 className="individual-article-title">{individualArticle.title}</h2>
        <p className="individual-article-info">Author: {individualArticle.author}</p>
        <p className="individual-article-date">Created at: {individualArticle.created_at}</p>
        <p className="individual-article-votes">Votes: {individualArticle.votes}</p>
        <p className="individual-article-body">{individualArticle.body}</p>
        <p className="article-comment-count">Comments: {individualArticle.comment_count}</p>
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
        <Link to={articles}>Back</Link>
      </button>
        </div>
    )
}
