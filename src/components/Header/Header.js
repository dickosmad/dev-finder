import "./Header.css";

import React from "react";
import { MdLightMode } from "react-icons/md";

export default function Header() {
  return (
    <div className="navbar-container">
      <h2 className="navbar-title">devfinder</h2>
      <div className="navbar-theme">
        <h4>LIGHT </h4> <MdLightMode />
      </div>
    </div>
  );
}
