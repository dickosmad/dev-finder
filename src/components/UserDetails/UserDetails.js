import "./UserDetails.css";

import React from "react";

import formatDate from "#src/helpers/formatDate";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsLink45Deg } from "react-icons/bs";
import { TiSocialTwitter } from "react-icons/ti";
import { BiBuildings } from "react-icons/bi";

export default function UserDetails({ userData }) {
  const {
    avatar_url,
    bio,
    blog,
    company,
    created_at,
    followers,
    following,
    location,
    login,
    name,
    public_repos,
    twitter_username,
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
                <h2>
                  {" "}
                  {name !== null ? (
                    name
                  ) : (
                    <span
                      style={{ opacity: 0.7, fontStyle: "oblique" }}
                      className="not-avalaible"
                    >
                      Not available
                    </span>
                  )}{" "}
                </h2>
                <p>
                  @{" "}
                  {login !== null ? (
                    login
                  ) : (
                    <span
                      style={{ opacity: 0.7, fontStyle: "oblique" }}
                      className="not-avalaible"
                    >
                      Not available
                    </span>
                  )}{" "}
                </p>
              </div>

              <div className="join-date">
                <date>Joined {formatDate(created_at)} </date>
              </div>
            </div>
            <div className="usercard-bio">
              {bio !== null ? (
                bio
              ) : (
                <span
                  style={{ opacity: 0.7, fontStyle: "oblique" }}
                  className="not-avalaible"
                >
                  Not available
                </span>
              )}
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
                  <a href="https://location.com/" alt="location"></a>{" "}
                  <HiOutlineLocationMarker />{" "}
                  {location !== null ? (
                    location
                  ) : (
                    <span
                      style={{ opacity: 0.7, fontStyle: "oblique" }}
                      className="not-avalaible"
                    >
                      Not available
                    </span>
                  )}
                </li>
                <li>
                  <a href="https://github.com" alt="twitter"></a>{" "}
                  <BsLink45Deg />{" "}
                  {blog !== null ? (
                    blog
                  ) : (
                    <span
                      style={{ opacity: 0.7, fontStyle: "oblique" }}
                      className="not-avalaible"
                    >
                      Not available
                    </span>
                  )}
                </li>
              </div>
              <div className="twitter-pseudo">
                <li>
                  <a href="https://twitter.com/" alt="twitter"></a>{" "}
                  <TiSocialTwitter />{" "}
                  {twitter_username !== null ? (
                    twitter_username
                  ) : (
                    <span
                      style={{ opacity: 0.7, fontStyle: "oblique" }}
                      className="not-avalaible"
                    >
                      Not available
                    </span>
                  )}
                </li>
                <li>
                  <a href="https://twitter.com/" alt="twitter"></a>{" "}
                  <BiBuildings />{" "}
                  {company !== null ? (
                    company
                  ) : (
                    <span
                      style={{ opacity: 0.7, fontStyle: "oblique" }}
                      className="not-avalaible"
                    >
                      Not available
                    </span>
                  )}
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
