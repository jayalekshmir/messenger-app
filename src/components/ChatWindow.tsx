import React, { useContext } from "react";
import { ChatContext } from "../App";
import MessageInput from "./MessageInput";
import { Message } from "../utils/dataModel";
function ChatWindow() {
  const context = useContext(ChatContext);

  if (!context) {
    return null;
  }

  const { selectedFriend, chats, chatEndRef } = context;

  if (!selectedFriend) {
    return (
      <div className="chat-window  flex flex-col w-5/6">
        Please select a friend from the list to begin the chat
      </div>
    );
  }

  return (
    <div className="chat-window flex flex-col w-5/6 justify-between m-2">
      <h3 className="text-xl font-bold text-right mx-4 px-2">
        {selectedFriend}
      </h3>
      <div className="flex flex-col">
        <div className="messages bg-gray-300 m-4 p-4">
          {chats[selectedFriend].map((message: Message, index: number) => (
            <div
              key={index}
              className={`mt-4 p-2 ${
                message.sender === "Me" ? "text-right " : "text-left "
              }`}
            >
              {message.text}
            </div>
          ))}
          <div ref={chatEndRef}></div>
        </div>
        <MessageInput />
      </div>
    </div>
  );
}

export default ChatWindow;
