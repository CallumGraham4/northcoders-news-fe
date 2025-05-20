import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react'
import './App.css'
import { ArticlesList } from "./components/articles-list";
import { Home } from "./components/home";
import { getArticles } from "./components/fetch";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((response) => {
      setArticles(response);
    });
  }, []);


  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/articles" element={<ArticlesList articles={articles}/>}/>
      </Routes>
    </>
  )
}

export default App
