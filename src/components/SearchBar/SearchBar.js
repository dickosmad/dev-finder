import "./SearchBar.css";

import React from "react";

import { FiSearch } from "react-icons/fi";

export default function SearchBar({ userName, setUserName, onSearch }) {
  const changeHandler = (evt) => {
    setUserName(evt.target.value);
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
      {userName === "" ? <p className="no-results">No results</p> : null}
      <button onClick={() => onSearch()} className="search-btn" type="button">
        Search
      </button>
    </div>
  );
}
