import "./App.css";

import React, { useState, useEffect } from "react";

import Header from "./Header";
import SearchBar from "./SearchBar";
import UserDetails from "./UserDetails/UserDetails";
import Loading from "./Loading/Loading";

function App() {
  const [userData, setUserData] = useState("");
  const [userName, setUserName] = useState("octocat");
  const fetchUser = () => {
    fetch(`https://api.github.com/users/${userName}`)
      .then((response) => response.json())
      .then((user) => setUserData(user));
  };
  useEffect(() => {
    fetchUser();
  }, []);
  console.log(userData);
  return (
    <div className="app-container">
      <Header />
      <SearchBar
        onSearch={fetchUser}
        setUserName={setUserName}
        userName={userName}
      />
      {userData === undefined || userData === "" ? (
        <Loading />
      ) : (
        <UserDetails userData={userData} />
      )}
    </div>
  );
}

export default App;
