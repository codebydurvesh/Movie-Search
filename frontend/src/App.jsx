import "./css/App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Favorites from "./pages/Favorites";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import { MovieProvider } from "./contexts/MovieContext";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <MovieProvider>
      <ScrollToTop />
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
