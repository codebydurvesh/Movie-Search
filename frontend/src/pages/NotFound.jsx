import React from "react";
import { Link } from "react-router-dom";
import "../css/NotFound.css";

function NotFound() {
  return (
    <div className="not-found">
      <div className="content">
        <h1>
          4<span className="zero">0</span>4
        </h1>
        <h2>Page Not Found</h2>
        <p>
          Oops! The page you're looking for has vanished into the movie vault.
        </p>
        <div className="film-reel">
          <div className="film">
            <div className="holes"></div>
            <div className="holes"></div>
            <div className="holes"></div>
          </div>
        </div>
        <Link to="/" className="home-button">
          Back to Movies
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
