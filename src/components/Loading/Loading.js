import "./Loading.css";
import React from "react";

export default function Loading() {
  return (
    <div className="shine loading-container">
      <photo class="shine"></photo>
      <div className="loading-bio-container">
        <div className="loading-profile-join-date">
          <div className="loading-profile">
            <lines class="shine"></lines>
            <lines class="shine"></lines>
          </div>
          <div className=" shine loading-join-date">
            <lines class="shine"></lines>
          </div>
        </div>
        <box className="shine loading-github-profile-info"></box>
        <div className="loading-divider">
          <div>
            <lines class="shine"></lines>
            <lines class="shine"></lines>
          </div>
          <div>
            <lines class="shine"></lines>
            <lines class="shine"></lines>
          </div>
        </div>
      </div>
    </div>
  );
}
