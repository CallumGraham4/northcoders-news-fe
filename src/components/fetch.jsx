import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://northcoders-news-be-klxa.onrender.com/api",
});

export const getArticles = () => {
  return apiClient
      .get("/articles")
      .then((response) => response.data.articles)
      .catch((error) => {
        console.log(error);
        return []
      })
};

export function getArticleById(article_id) {
  return apiClient
    .get(`/articles/${article_id}`)
    .then((response) => {
      return response.data;
    }).catch((err) => {
        console.log(err)
    });
}

export function getCommentsByArticleId(article_id) {
  return apiClient
  .get(`/articles/${article_id}/comments`)
  .then((response) => {
    return response.data
  }).catch((err) => {
        console.log(err)
    });
}

