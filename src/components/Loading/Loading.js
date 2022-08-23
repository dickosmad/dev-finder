import "./Loading.css";
import React from "react";

export default function Loading() {
  return (
    <div className="shine loading-container">
      <div className="shine photo"></div>
      <div className="loading-bio-container">
        <div className="loading-profile-join-date">
          <div className="loading-profile">
            <div className="shine lines "></div>
            <div className="shine lines"></div>
          </div>
          <div className=" shine loading-join-date">
            <div className="shine lines"></div>
          </div>
        </div>
        <div className="shine loading-github-profile-info"></div>
        <div className="loading-divider">
          <div>
            <div className="shine lines"></div>
            <div className="shine lines"></div>
          </div>
          <div>
            <div className="shine lines"></div>
            <div className="shine lines"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
