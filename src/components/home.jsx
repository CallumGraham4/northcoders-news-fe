import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <nav className="nav-bar">
        <ul className="nav-list">
          <li>
            <Link to="/" className="homepage-btn">
                Home
            </Link>
          </li>
          <li>
            <Link to="/articles" className="article-list-btn">
                View All Articles
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
