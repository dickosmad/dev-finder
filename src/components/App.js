import "./App.css";

import React, { useState, useEffect } from "react";

import Header from "./Header";
import SearchBar from "./SearchBar";
import UserCard from "./UserCard/UserCard";

function App() {
  const [userData, setUserData] = useState("");
  const [query, setQuery] = useState("dickosmad");
  const fetchUser = () => {
    fetch(`https://api.github.com/users/${query}`)
      .then((response) => response.json())
      .then((user) => setUserData(user));
  };
  useEffect(() => {
    fetchUser();
  }, [query]);
  console.log(userData);
  return (
    <div className="app-container">
      <Header />
      <SearchBar query={query} setQuery={setQuery} getData={fetchUser} />
      <UserCard userData={userData} />
    </div>
  );
}

export default App;
