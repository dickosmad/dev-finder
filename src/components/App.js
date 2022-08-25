import "./App.css";

import React, { useState, useEffect } from "react";

import Header from "./Header";
import SearchBar from "./SearchBar";
import UserDetails from "./UserDetails/UserDetails";
import Loading from "./Loading/Loading";
import themeStyles from "#src/utils";

const LIGHT_AND_DARK_STYLES = {
  body_light_color: {
    backgroundColor: "#F6F8FF",
    color: "#222731",
  },
  header_light_color: {
    color: "#222731",
  },
  searchBar_light_color: {
    color: "#222731",
    backgroundColor: "#FFFFFF",
  },
  userDetails_light_color: {
    backgroundColor: "#FFFFFF",
    color: "#697C9A",
  },
  userDetails_github_data_light_color: {
    backgroundColor: "#F6F8FF",
    color: "#4B6A9B",
  },
  header_dark_color: {
    color: "#FFFFFF",
  },
  body_dark_color: {
    backgroundColor: "#141D2F",
    color: "#FFFFFF",
  },
  searchBar_dark_color: {
    backgroundColor: "#1E2A47",
    color: "#FFFFFF",
  },
  userDetails_dark_color: {
    backgroundColor: "#1E2A47",
    color: "#FFFFFF",
  },
  userDetails_github_data_dark_color: {
    backgroundColor: "#141D2F",
    color: "#FFFFFF",
  },
};

console.log("styles", themeStyles);

function App() {
  const [userData, setUserData] = useState("");
  const [userName, setUserName] = useState("octocat");
  const [isDark, setIsDark] = useState(true);
  const fetchUser = () => {
    fetch(`https://api.github.com/users/${userName}`)
      .then((response) => response.json())
      .then((user) => setUserData(user));
  };
  useEffect(() => {
    fetchUser();
  }, []);
  useEffect(() => {
    document.body.style.backgroundColor = isDark
      ? themeStyles.body_dark_color.backgroundColor
      : themeStyles.body_light_color.backgroundColor;
    document.body.style.color = isDark
      ? themeStyles.body_dark_color.color
      : themeStyles.body_light_color.color;
  }, [isDark]);
  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  console.log(userData);
  return (
    <div className={`app-container`}>
      <Header
        isDark={isDark}
        toggleTheme={toggleTheme}
        styles={LIGHT_AND_DARK_STYLES}
      />
      <SearchBar
        onSearch={fetchUser}
        setUserName={setUserName}
        userName={userName}
        isDark={isDark}
        toggleTheme={toggleTheme}
        styles={themeStyles}
      />
      {userData === undefined || userData === "" ? (
        <Loading />
      ) : (
        <UserDetails
          userData={userData}
          styles={LIGHT_AND_DARK_STYLES}
          isDark={isDark}
        />
      )}
    </div>
  );
}

export default App;
