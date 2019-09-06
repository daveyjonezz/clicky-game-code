import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="click-item" style = {{backgroundImage: `url(${props.image})`}} data-id={props.id} onClick={() => props.removeFriend(props.id)}>
    </div>
  );
}

export default FriendCard;
