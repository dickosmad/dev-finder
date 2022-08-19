import "./App.css";

import React, { useState, useEffect } from "react";

import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import UserCard from "./UserCard/UserCard";

function App() {
  const [userData, setUserData] = useState("");
  const [query, setQuery] = useState("dickosmad");
  const fetchUser = () => {
    fetch(`https://api.github.com/users/${query}`)
      .then((user) => user.json())
      .then((response) => setUserData(response));
  };
  useEffect(() => {
    fetchUser();
  }, [query]);
  console.log(userData);
  return (
    <div className="app-container">
      <Navbar />
      <SearchBar query={query} setQuery={setQuery} getData={fetchUser} />
      <UserCard userData={userData} />
    </div>
  );
}

export default App;
