import React, { useState } from "react";
import { useChatContext } from "../context/ChatContext";

function MessageInput() {
  const [message, setMessage] = useState<string>("");
  const { selectedFriend, sendMessage } = useChatContext();

  const handleSend = (event: any) => {
    if (event.key === "Enter")
      if (message.trim() && selectedFriend) {
        sendMessage(selectedFriend, message);
        setMessage("");
      }
  };

  return (
    <div className="h-12 mx-4" data-testid="message-input-container">
      <input
        className="message-input flex w-full h-full text-lg border rounded-md p-2"
        type="text"
        placeholder="Type your message and Press Enter..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleSend}
        data-testid="message-input-field"
      />
    </div>
  );
}

export default MessageInput;
