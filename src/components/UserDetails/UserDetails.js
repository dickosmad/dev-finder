import "./UserDetails.css";

import React from "react";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsLink45Deg } from "react-icons/bs";
import { TiSocialTwitter } from "react-icons/ti";
import { BiBuildings } from "react-icons/bi";

export default function UserDetails({ userData }) {
  const {
    avatar_url,
    bio,
    company,
    followers,
    following,
    location,
    login,
    name,
    public_repos,
  } = userData;
  console.log("userData", userData);
  return (
    <div className="usercard-container">
      <div className="usercard-bio">
        <div className="usercard-profile">
          <div className="usercard-image">
            <img src={avatar_url} alt={name} className="image-profile" />
          </div>
          <div className="usercard-infos">
            <div className="usercard-name">
              <div className="octa">
                <h2>{name} </h2>
                <p>@{login} </p>
              </div>

              <div className="join-date">
                <date>Joined 25 Jan 2011</date>
              </div>
            </div>
            <div className="usercard-bio">
              {bio !== null ? bio : "Not avalaible"}
            </div>
            <ul className="usercard-github-data">
              <li>
                <p>Repos</p>
                <p>{public_repos} </p>
              </li>
              <li>
                <p>Followers</p>
                <p>{followers} </p>
              </li>
              <li>
                <p>Following</p>
                <p>{following} </p>
              </li>
            </ul>
            <ul className="usercard-social-links">
              <div className="city-github">
                <li>
                  <a href="https://location.com/" alt="twitter"></a>{" "}
                  <HiOutlineLocationMarker /> {location}
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
                  <BiBuildings /> {company}
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
