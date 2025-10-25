import MovieCard from "../components/MovieCard.jsx";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { searchMovies, getPopularMovies } from "../services/api.js";
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const observer = useRef();

  // Last movie element ref callback
  const lastMovieElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMoreMovies();
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  const loadMoreMovies = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const data = isSearching
        ? await searchMovies(searchQuery, page)
        : await getPopularMovies(page);

      if (data.results.length === 0) {
        setHasMore(false);
        return;
      }

      // Filter out duplicates
      const newMovies = data.results.filter(
        (newMovie) =>
          !movies.some((existingMovie) => existingMovie.id === newMovie.id)
      );

      setMovies((prevMovies) => [...prevMovies, ...newMovies]);
      setPage((prevPage) => prevPage + 1);
      setHasMore(page < data.total_pages);
    } catch (err) {
      console.log(err);
      setError("Failed to load more movies...");
    } finally {
      setLoading(false);
    }
  };

  // Initial load
  useEffect(() => {
    setLoading(true);
    getPopularMovies(1)
      .then((data) => {
        setMovies(data.results);
        setPage(2);
        setHasMore(page < data.total_pages);
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to load movies...");
      })
      .finally(() => setLoading(false));
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);
    setIsSearching(true);
    setPage(1);
    setMovies([]);

    try {
      const data = await searchMovies(searchQuery, 1);
      setMovies(data.results);
      setPage(2);
      setHasMore(data.total_pages > 1);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to search movies...");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      <div className="movies-grid">
        {movies.map((movie, index) => (
          <div
            key={movie.id}
            ref={index === movies.length - 1 ? lastMovieElementRef : null}
          >
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>

      {loading && (
        <div
          className="loading"
          style={{ textAlign: "center", padding: "2rem" }}
        >
          Loading more movies...
        </div>
      )}

      {!hasMore && movies.length > 0 && (
        <div style={{ textAlign: "center", padding: "2rem", color: "#666" }}>
          No more movies to load.
        </div>
      )}
    </div>
  );
}

export default Home;
