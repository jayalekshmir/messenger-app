import React, { useContext } from "react";
import { ChatContext } from "../App";

function FriendsList() {
  const context = useContext(ChatContext);

  if (!context) {
    return null;
  }

  const { setSelectedFriend, selectedFriend, friendsList } = context;

  return (
    <div className="friends-list flex flex-col w-1/6 m-2">
      <h3 className="text-xl font-bold">Friends</h3>
      <ul className="mt-4">
        {friendsList.map((friend: string) => (
          <li
            key={friend}
            onClick={() => setSelectedFriend(friend)}
            className={`mt-2 p-1 cursor-pointer ${
              selectedFriend === friend ? `bg-lime-200 rounded` : ``
            }`}
          >
            {friend}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FriendsList;
