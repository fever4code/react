import React from "react";
import "./FriendListItem.css";

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <span className={isOnline ? "statusOnline" : "statusOffline"}></span>
      <img src={avatar} alt={name} width="48" className="avatar" />
      <p className="friendListItem__name">{name}</p>
    </>
  );
}

export default FriendListItem;
