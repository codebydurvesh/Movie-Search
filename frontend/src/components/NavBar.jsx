import { Link, useLocation } from "react-router-dom";
import "../css/NavBar.css";

function NavBar() {
  const location = useLocation();

  const handleNavClick = (path) => {
    // If clicking the same page, scroll to top
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" onClick={() => handleNavClick("/")}>
          <b>
            <b>CodeByDurvesh</b>
          </b>
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link" onClick={() => handleNavClick("/")}>
          Home
        </Link>
        <Link
          to="/Favorites"
          className="nav-link"
          onClick={() => handleNavClick("/favorites")}
        >
          Favorites
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
