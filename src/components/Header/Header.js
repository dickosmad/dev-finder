import "./Header.css";

import React from "react";
import { MdLightMode } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

export default function Header({ isDark, styles, toggleTheme }) {
  const icon = isDark ? <FaMoon /> : <MdLightMode />;
  return (
    <div
      style={{
        color: `${
          isDark
            ? styles.header_dark_color.color
            : styles.header_light_color.color
        } `,
      }}
      className="navbar-container"
      onClick={() => toggleTheme()}
    >
      <h2 className="navbar-title">devfinder</h2>
      <div className="navbar-theme">
        <h4>{isDark ? "LIGHT" : "DARK"} </h4> {icon}
      </div>
    </div>
  );
}
