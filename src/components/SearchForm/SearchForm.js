import React, { useState } from "react";
import SearchButton from "../SearchButton/SearchButton";
import "./SearchForm.css";
const SearchForm = (props) => {
  const [searchKey, setSearchKey] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [mediaType, setMediaType] = useState("");
  const [lang, setLang] = useState("");

  // Bắt sự kiện của input
  const inputChangeHandler = (e) => {
    setSearchKey(e.target.value);
  };

  const yearChangeHandler = (e) => {
    setYear(e.target.value);
  };

  const genreChangeHandler = (e) => {
    setGenre(e.target.value);
  };
  const mediaChangeHandler = (e) => {
    setMediaType(e.target.value);
  };
  const langChangeHandler = (e) => {
    setLang(e.target.value);
  };

  //Lấy search key người dùng nhập
  const submitHandler = (e) => {
    e.preventDefault();
    props.onSearch(searchKey, year, genre, mediaType, lang);
  };

  //Reset khung input
  const resetInputHandler = () => {
    setSearchKey("");
    setYear("");
    setGenre("");
    setMediaType("");
    setLang("");
  };

  return (
    <section className="search-container" onSubmit={submitHandler}>
      <form className="search-form">
        <div className="input">
          <input
            type="text"
            id="search"
            placeholder="Search"
            onChange={inputChangeHandler}
            value={searchKey}
          />
          <SearchButton className="search-icon" />
        </div>
        <div className="input">
          <input
            type="text"
            id="search"
            placeholder="Year"
            onChange={yearChangeHandler}
            value={year}
          />
          <SearchButton className="search-icon" />
        </div>
        <select className="select" onChange={genreChangeHandler}>
          <option value="">Choose Genre</option>
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
          <option value="Animation">Animation</option>
          <option value="Comedy">Comedy</option>
          <option value="Crime">Crime</option>
          <option value="Documentary">Documentary</option>
          <option value="Drama">Drama</option>
          <option value="Family">Family</option>
          <option value="History">History</option>
          <option value="Horror">Horror</option>
          <option value="Music">Music</option>
          <option value="Mystery">Mystery</option>
          <option value="Romance">Romance</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="TV Movie">TV Movie</option>
          <option value="Thriller">Thriller</option>
          <option value="War">War</option>
          <option value="Western">Western</option>
        </select>
        <select className="select" onChange={mediaChangeHandler}>
          <option value="">All</option>
          <option value="movie">Movie</option>
          <option value="tv">Tv</option>
          <option value="person">Person</option>
        </select>
        <select className="select" onChange={langChangeHandler}>
          <option value="">Choose Language</option>
          <option value="en">English</option>
          <option value="ja">Japanese</option>
          <option value="ko">Korean</option>
        </select>
        <div className="search-button">
          <button onClick={resetInputHandler}>RESET</button>
          <button className="active">SEARCH</button>
        </div>
      </form>
    </section>
  );
};
export default SearchForm;
