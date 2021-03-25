import React from "react";
import "./FriendCard.scss";

const FriendCard = ({ photo }) => {
  return (
    <div
      className="friend-card"
      style={{ backgroundImage: `url(${photo})` }}
    ></div>
  );
};

export default FriendCard;
