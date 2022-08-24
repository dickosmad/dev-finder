import "./SearchBar.css";

import React from "react";

import { FiSearch } from "react-icons/fi";

export default function SearchBar({
  isDark,
  onSearch,
  setUserName,
  styles,
  userName,
}) {
  const changeHandler = (evt) => {
    setUserName(evt.target.value);
  };

  return (
    <div
      style={{
        backgroundColor: `${
          isDark
            ? styles.searchBar_dark_color.backgroundColor
            : styles.searchBar_light_color.backgroundColor
        } `,
        color: `${
          isDark
            ? styles.searchBar_dark_color.color
            : styles.searchBar_light_color.color
        } `,
      }}
      className="search-container"
    >
      <span className="search-icon">
        <FiSearch size={"1.5em"} />{" "}
      </span>
      <input
        style={{
          backgroundColor: `${
            isDark
              ? styles.searchBar_dark_color.backgroundColor
              : styles.searchBar_light_color.backgroundColor
          } `,
          color: `${
            isDark
              ? styles.searchBar_dark_color.color
              : styles.searchBar_light_color.color
          } `,
        }}
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
