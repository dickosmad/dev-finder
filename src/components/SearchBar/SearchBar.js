import "./SearchBar.css";

import React from "react";

import { FiSearch } from "react-icons/fi";

export default function SearchBar({ query, setQuery, getData }) {
  const changeHandler = (evt) => {
    setQuery(evt.target.value);
  };

  return (
    <div className="search-container">
      <span className="search-icon">
        <FiSearch size={"1.5em"} />{" "}
      </span>
      <input
        className="search-input"
        onChange={changeHandler}
        placeholder="Search Github Username..."
        type="text"
      />
      {query === "" ? <p className="no-results">No results</p> : null}
      <button onClick={() => getData()} className="search-btn" type="button">
        Search
      </button>
    </div>
  );
}
