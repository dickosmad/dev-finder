import "./SearchBar.css";

import React from "react";

import { FiSearch } from "react-icons/fi";

export default function SearchBar() {
  return (
    <div className="search-container">
      <span className="search-icon">
        <FiSearch size={"1.5em"} />{" "}
      </span>
      <input
        className="search-input"
        type="text"
        placeholder="Search Github Username..."
      />
      <button className="search-btn" type="button">
        Search
      </button>
    </div>
  );
}
