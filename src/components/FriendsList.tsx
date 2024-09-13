import React from "react";
import { useChatContext } from "../context/ChatContext";

function FriendsList() {
  const { setSelectedFriend, selectedFriend, friendsList } = useChatContext();

  return (
    <div
      className="friends-list flex flex-col w-1/6 m-2"
      data-testid="friends-list-container"
    >
      <h3 className="text-xl font-bold" data-testid="friends-list-title">
        Friends
      </h3>
      <ul className="mt-4" data-testid="friends-list-group">
        {friendsList.map((friend: string) => (
          <li
            key={friend}
            onClick={() => setSelectedFriend(friend)}
            className={`mt-2 p-1 cursor-pointer ${
              selectedFriend === friend ? `bg-lime-200 rounded` : ``
            }`}
            data-testid={`friends-list-friend-${friend}`}
          >
            {friend}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FriendsList;
