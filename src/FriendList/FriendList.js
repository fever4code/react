import React from "react";
import "./FriendList.css";
import FriendListItem from "../FriendListItem/FriendListItem";

function FriendList({ friends }) {
  return (
    <ul className="friendList__container">
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id} className="friendList__item">
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
}
export default FriendList;
