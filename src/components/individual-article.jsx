import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "./fetch";
import { Link } from "react-router-dom";

export const IndividualArticle = () => {
    const [individualArticle, setIndividualArticle] = useState({});
    const {article_id} = useParams();
    const articles = "/articles";

    useEffect(() => {
        getArticleById(article_id).then(({article}) => {
            setIndividualArticle(article)
        })
    }, [article_id])

    return (
        <div>
        <div className="article">
        <h2 className="article-title">{individualArticle.title}</h2>
        <p className="article-info">Author: {individualArticle.author}</p>
        <p className="article-date">Created at: {individualArticle.created_at}</p>
        <p className="article-votes">Votes: {individualArticle.votes}</p>
        <p className="article-body">{individualArticle.body}</p>
        <p className="article-comment-count">Comments: {individualArticle.comment_count}</p>
        </div>
        <button className="read-article-button">
        <Link to={articles}>Back</Link>
      </button>
        </div>
    )
}
