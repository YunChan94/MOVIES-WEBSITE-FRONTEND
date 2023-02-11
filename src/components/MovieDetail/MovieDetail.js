import "./MovieDetail.css";
import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";

const MovieDetail = (props) => {
  const [movieTrailer, setMovieTrailer] = useState([]);

  //Lấy data
  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ film_id: `${props.id}` }),
    };
    fetch(
      "http://localhost:5000/api/movies/video?token=RYoOcWM4JW",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => setMovieTrailer(data));
  }, [props.id]);

  // Khi không có dữ liệu video, sử dụng ảnh backdrop
  let content = (
    <img src={`http://image.tmdb.org/t/p/w500/${props.picture}`} alt="" />
  );
  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };
  // Nếu trả về lỗi
  if (movieTrailer.length !== 0) {
    content = <YouTube videoId={movieTrailer.key} opts={opts} />;
  }
  return (
    <div onClose={props.onClose} className="container">
      <div className="detail">
        <h1>{props.title}</h1>
        <h3>Release Date: {props.releaseDate}</h3>
        <h3>Vote: {props.vote}/10</h3>
        <p>{props.overview}</p>
      </div>
      <div className="trailer">{content}</div>
    </div>
  );
};
export default MovieDetail;
