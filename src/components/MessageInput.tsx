import React, { useState, useContext } from "react";
import { ChatContext } from "../App";

function MessageInput() {
  const [message, setMessage] = useState<string>("");
  const context = useContext(ChatContext);

  if (!context) {
    return null;
  }

  const { selectedFriend, sendMessage } = context;

  const handleSend = () => {
    if (message.trim() && selectedFriend) {
      sendMessage(selectedFriend, message);
      setMessage("");
    }
  };

  return (
    <div className="message-input">
      <input
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}

export default MessageInput;
