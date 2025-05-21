import { Routes, Route } from "react-router-dom";
import './App.css'
import { ArticlesList } from "./components/articles-list";
import { Home } from "./components/home";
import { IndividualArticle } from "./components/individual-article"

function App() {
  
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/articles" element={<ArticlesList />}/>
        <Route path="/articles/:article_id" element={<IndividualArticle/>}/>
      </Routes>
    </>
  )
}

export default App
