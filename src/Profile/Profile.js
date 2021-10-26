import React from "react";
import "./Profile.css";
import defaultImg from "../assets/default.jpg";
import PropTypes from "prop-types";

function Profile({
  name,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <div className="profile__container">
      <img
        className="profile__avatar"
        src={avatar}
        alt={name}
        width={100}
        height={100}
      />
      <p className="profile__text profile__title">{name}</p>
      <p className="profile__text">{`@${tag}`}</p>
      <p className="profile__text profile__text__location">{location}</p>
      <ul className="profile__stats">
        <li className="profile__list__item">
          <span className="profile__label">Followers</span>
          <span className="profile__quantity">{followers}</span>
        </li>
        <li className="profile__list__item">
          <span className="profile__label">Views</span>
          <span className="profile__quantity">{views}</span>
        </li>
        <li className="profile__list__item">
          <span className="profile__label">Likes</span>
          <span className="profile__quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.defaultProps = {
  avatar: defaultImg,
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
