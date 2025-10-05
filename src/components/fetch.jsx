import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://northcoders-news-backend-z8oc.onrender.com/api",
});

export const getArticles = () => {
  return apiClient
    .get("/articles")
    .then((response) => response.data.articles)
    .catch((error) => {
      console.log(error);
      return [];
    });
};

export function getArticleById(article_id) {
  return apiClient
    .get(`/articles/${article_id}`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getCommentsByArticleId(article_id) {
  return apiClient
    .get(`/articles/${article_id}/comments`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function patchVotes(article_id, inc_votes) {
  return apiClient
    .patch(`/articles/${article_id}`, {inc_votes})
    .catch((err) => {
      console.log(err);
    });
}

export function postComment(article_id, comment) {
  return apiClient
    .post(`/articles/${article_id}/comments`, {
      username: comment.username,
      body: comment.body,
    })
    .then((response) => {
      return response.data
    })
    .catch((err) => {
      return Promise.reject(err);
    });
}

export function deleteComment(comment_id) {
  return apiClient
  .delete(`/comments/${comment_id}`)
  .catch((err) => {
    return Promise.reject(err);
  })
}
