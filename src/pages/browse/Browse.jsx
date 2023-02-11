import React from "react";
import "./Browse.css";
import NavBar from "../../components/NavBar/NavBar";
import Banner from "../../components/Banner/Banner";
import MoviesList from "../../components/MoviesList/MoviesList";

function Browse() {
  const TOKEN = "RYoOcWM4JW";
  const requests = {
    fetchTrending: `/trending?token=${TOKEN}`,
    fetchNetflixOriginals: `/trending?token=${TOKEN}`,
    fetchTopRated: `/top-rate?token=${TOKEN}`,
    fetchActionMovies: `/discover/action?token=${TOKEN}`,
    fetchComedyMovies: `/discover/comedy?token=${TOKEN}`,
    fetchHorrorMovies: `/discover/horror?token=${TOKEN}`,
    fetchRomanceMovies: `/discover/romance?token=${TOKEN}`,
    fetchDocumentaries: `/discover/documentary?token=${TOKEN}`,
    fetchSearch: `/search?token=${TOKEN}`,
  };

  return (
    <div className="app">
      <NavBar />
      <Banner url={requests.fetchNetflixOriginals} />
      <MoviesList url={requests.fetchNetflixOriginals} type="original" />
      <MoviesList url={requests.fetchTrending} id="Xu hướng" />
      <MoviesList url={requests.fetchTopRated} id="Xếp hạng cao" />
      <MoviesList url={requests.fetchActionMovies} id="Hành động" />
      <MoviesList url={requests.fetchComedyMovies} id="Hài" />
      <MoviesList url={requests.fetchHorrorMovies} id="Kinh dị" />
      <MoviesList url={requests.fetchRomanceMovies} id="Lãng mạn" />
      <MoviesList url={requests.fetchDocumentaries} id="Tài liệu" />
    </div>
  );
}

export default Browse;
