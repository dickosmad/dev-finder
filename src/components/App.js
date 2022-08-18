import "./App.css";

import React from "react";

import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import UserCard from "./UserCard/UserCard";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <SearchBar />
      <UserCard />
    </div>
  );
}

export default App;
