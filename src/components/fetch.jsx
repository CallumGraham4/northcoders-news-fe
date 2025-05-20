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

