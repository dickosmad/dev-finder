import "./SearchBar.css";

import React, { useEffect, useMemo } from "react";

import { FiSearch } from "react-icons/fi";
import debounce from "../helpers";

export default function SearchBar({ query, setQuery }) {
  const changeHandler = (evt) => {
    setQuery(evt.target.value);
  };

  const debounceChangeHandler = useMemo(() => {
    debounce(changeHandler, 300);
  }, []);

  useEffect(() => {
    return () => debounceChangeHandler.cancel();
  }, []);
  return (
    <div className="search-container">
      <span className="search-icon">
        <FiSearch size={"1.5em"} />{" "}
      </span>
      <input
        className="search-input"
        onChange={debounceChangeHandler}
        placeholder="Search Github Username..."
        type="text"
      />
      {query === "" ? <p className="no-results">No results</p> : null}
      <button className="search-btn" type="button">
        Search
      </button>
    </div>
  );
}
