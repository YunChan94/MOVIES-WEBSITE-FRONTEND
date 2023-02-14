import React, { useState } from "react";
import "./Search.css";
import NavBar from "../../components/NavBar/NavBar";
import SearchForm from "../../components/SearchForm/SearchForm";
import ResultList from "../../components/ResultList/ResultList";
const Search = () => {
  const [searchKey, setSearchKey] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [mediaType, setMediaType] = useState("");
  const [lang, setLang] = useState("");
  // Dữ liệu tìm kiếm
  const searchHandler = (keyword, year, genre, mediaType, lang) => {
    setSearchKey(keyword);
    setGenre(genre);
    setMediaType(mediaType);
    setLang(lang);
    setYear(year);
  };
  return (
    <div className="app">
      <NavBar />
      <SearchForm onSearch={searchHandler} />
      <ResultList
        keyword={searchKey}
        genre={genre}
        mediaType={mediaType}
        lang={lang}
        year={year}
        id="results"
      />
    </div>
  );
};

export default Search;
