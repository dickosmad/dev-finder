import "./UserDetails.css";

import React from "react";

import formatDate from "#src/helpers/formatDate";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsLink45Deg } from "react-icons/bs";
import { TiSocialTwitter } from "react-icons/ti";
import { BiBuildings } from "react-icons/bi";

export default function UserDetails({ userData, styles, isDark }) {
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
    <div
      style={{
        backgroundColor: `${
          isDark
            ? styles.userDetails_dark_color.backgroundColor
            : styles.userDetails_light_color.backgroundColor
        } `,
        color: `${
          isDark
            ? styles.userDetails_dark_color.color
            : styles.userDetails_light_color.color
        } `,
      }}
      className="user-details-container"
    >
      <div className="user-details-profile">
        <div className="user-details-image">
          <img src={avatar_url} alt={name} className="image-profile" />
        </div>
        <div className="user-details-infos">
          <div className="user-login-infos">
            <div className="profile-pseudoname">
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

            <div className="user-join-date">
              <time>Joined {formatDate(created_at)} </time>
            </div>
          </div>
          <div className="user-details-bio">
            {bio !== null ? (
              bio
            ) : (
              <span
                style={{ opacity: 0.7, fontStyle: "oblique" }}
                className="not-avalaible"
              >
                This profile has no bio
              </span>
            )}
          </div>
          <ul
            style={{
              backgroundColor: `${
                isDark
                  ? styles.userDetails_github_data_dark_color.backgroundColor
                  : styles.userDetails_github_data_light_color.backgroundColor
              } `,
              color: `${
                isDark
                  ? styles.userDetails_github_data_dark_color.color
                  : styles.userDetails_github_data_light_color.color
              } `,
            }}
            className="user-github-data"
          >
            <li>
              <p>Repos</p>
              <h4>{public_repos} </h4>
            </li>
            <li>
              <p>Followers</p>
              <h4>{followers} </h4>
            </li>
            <li>
              <p>Following</p>
              <h4>{following} </h4>
            </li>
          </ul>
          <ul className="user-social-links">
            <div>
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
                <a href="https://github.com" alt="twitter"></a> <BsLink45Deg />{" "}
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
            <div>
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
  );
}
