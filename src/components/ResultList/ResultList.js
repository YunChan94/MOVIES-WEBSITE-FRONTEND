import "./ResultList.css";
import React, { useState, useEffect } from "react";
import MovieDetail from "../MovieDetail/MovieDetail";
const ResultList = (props) => {
  const [movies, setMovies] = useState([]);
  const [movieDetailIsShown, setMovieDetailIsShown] = useState(false);
  const [movieDetailId, setMovieDetailId] = useState(null);

  //Shown detail của movie
  const showMovieDetailHandler = (e) => {
    setMovieDetailIsShown(true);
    if (Number(e.target.id) === movieDetailId) {
      setMovieDetailIsShown(!movieDetailIsShown);
    }
    setMovieDetailId(Number(e.target.id));
  };

  //Hide detail của movie
  const hideMovieDetailHandler = () => {
    setMovieDetailIsShown(false);
  };

  //Lấy dữ liệu của movie mở detail
  const movieDeTail = movies.find((movie) => movie.id === movieDetailId);

  // Lấy data Trending

  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        keyword: `${props.keyword}`,
        genre: `${props.genre}`,
        mediaType: `${props.mediaType}`,
        lang: `${props.lang}`,
        year: `${props.year}`,
      }),
    };

    fetch(
      "http://localhost:5000/api/movies/search?token=RYoOcWM4JW",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, [props.keyword, props.genre, props.mediaType, props.lang, props.year]);

  // Khi chưa nhập search key
  let content = <p>Let's search!</p>;

  // Khi nhập search key
  if (props.keyword !== "") {
    // Khi tìm có kết quả
    if (movies.length !== 0) {
      content = (
        <div className="searchItem">
          {movies.map((movie) => (
            <div>
              <img
                className="search-img"
                src={`http://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                id={movie.id}
                onClick={showMovieDetailHandler}
                alt=""
              />
            </div>
          ))}
        </div>
      );
    } else {
      content = <p>Can't found any movies</p>;
    }
  }

  return (
    <section className="search-result">
      <h3>Search Result</h3>
      {movieDetailIsShown && (
        <MovieDetail
          onClose={hideMovieDetailHandler}
          id={movieDeTail.id}
          title={movieDeTail.name ? movieDeTail.name : movieDeTail.title}
          releaseDate={movieDeTail.first_air_date}
          vote={movieDeTail.vote_average}
          overview={movieDeTail.overview}
          picture={movieDeTail.backdrop_path}
        />
      )}
      {content}
    </section>
  );
};
export default ResultList;
