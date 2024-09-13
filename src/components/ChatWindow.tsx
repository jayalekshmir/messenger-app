import React, { useContext } from "react";
import { ChatContext } from "../App";
import MessageInput from "./MessageInput";
import { Message } from "../utils/dataModel";
function ChatWindow() {
  const context = useContext(ChatContext);

  if (!context) {
    return null;
  }

  const { selectedFriend, chats } = context;

  if (!selectedFriend) {
    return (
      <div className="chat-window  flex flex-col w-5/6">
        Please select a friend from the list to begin the chat
      </div>
    );
  }

  return (
    <div className="chat-window flex flex-col w-5/6">
      <h3>Chat with {selectedFriend}</h3>
      <div className="messages">
        {chats[selectedFriend].map((message: Message, index: number) => (
          <div
            key={index}
            className={
              message.sender === "Me" ? "my-message" : "friend-message"
            }
          >
            <strong>{message.sender}:</strong> {message.text}
          </div>
        ))}
      </div>
      <MessageInput />
    </div>
  );
}

export default ChatWindow;
