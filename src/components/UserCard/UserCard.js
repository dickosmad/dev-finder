import "./UserCard.css";

import React from "react";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsLink45Deg } from "react-icons/bs";
import { TiSocialTwitter } from "react-icons/ti";
import { BiBuildings } from "react-icons/bi";

export default function UserCard() {
  return (
    <div className="usercard-container">
      <div className="usercard-bio">
        <div className="usercard-profile">
          <div className="usercard-image">
            <img
              src="https://blog.logrocket.com/wp-content/uploads/2021/07/getting-started-notion-api.png"
              className="image-profile"
            />
          </div>
          <div className="usercard-infos">
            <div className="usercard-name">
              <div className="octa">
                <h2>The Octocat</h2>
                <p>@octocat</p>
              </div>

              <div className="join-date">
                <p>Joined 25 Jan 2011</p>
              </div>
            </div>
            <div className="usercard-bio">
              lorem ipsum dolor sit amet, consect, lorem ipsum dolor sit amet,
              consect
            </div>
            <ul className="usercard-github-data">
              <li>
                <p>Repos</p>
                <p>8</p>
              </li>
              <li>
                <p>Followers</p>
                <p>8</p>
              </li>
              <li>
                <p>Following</p>
                <p>3938</p>
              </li>
            </ul>
            <ul className="usercard-social-links">
              <div className="city-github">
                <li>
                  <a href="https://location.com/" alt="twitter"></a>{" "}
                  <HiOutlineLocationMarker /> San Fancisco
                </li>
                <li>
                  <a href="https://github.com" alt="twitter"></a>{" "}
                  <BsLink45Deg /> https://github.com
                </li>
              </div>
              <div className="twitter-pseudo">
                <li>
                  <a href="https://twitter.com/" alt="twitter"></a>{" "}
                  <TiSocialTwitter /> Not available
                </li>
                <li>
                  <a href="https://twitter.com/" alt="twitter"></a>{" "}
                  <BiBuildings /> @github
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
