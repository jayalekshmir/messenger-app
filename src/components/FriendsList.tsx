import React, { useContext } from "react";
import { ChatContext } from "../App";
import { friends } from "../utils/constants";

function FriendsList() {
  const context = useContext(ChatContext);

  if (!context) {
    return null;
  }

  const { setSelectedFriend } = context;

  return (
    <div className="friends-list flex flex-col w-1/6">
      <h3>Friends</h3>
      <ul>
        {friends.map((friend: string) => (
          <li key={friend} onClick={() => setSelectedFriend(friend)}>
            {friend}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FriendsList;
