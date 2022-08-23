import "./Header.css";

import React from "react";
import { MdLightMode } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

export default function Header({ isDark, toggleTheme }) {
  const icon = isDark ? <FaMoon /> : <MdLightMode />;
  return (
    <div className="navbar-container" onClick={() => toggleTheme()}>
      <h2 className="navbar-title">devfinder</h2>
      <div className="navbar-theme">
        <h4>{isDark ? "LIGHT" : "DARK"} </h4> {icon}
      </div>
    </div>
  );
}
