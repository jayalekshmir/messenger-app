import React, { useState, useContext } from "react";
import { ChatContext } from "../App";

function MessageInput() {
  const [message, setMessage] = useState<string>("");
  const context = useContext(ChatContext);

  if (!context) {
    return null;
  }

  const { selectedFriend, sendMessage } = context;

  const handleSend = (event: any) => {
    if (event.key === "Enter")
      if (message.trim() && selectedFriend) {
        sendMessage(selectedFriend, message);
        setMessage("");
      }
  };

  return (
    <div className="h-12 mx-4">
      <input
        className="message-input flex w-full h-full text-lg border rounded-md p-2"
        type="text"
        placeholder="Type your message and Press Enter..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleSend}
      />
    </div>
  );
}

export default MessageInput;
