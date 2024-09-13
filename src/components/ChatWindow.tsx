import React from "react";
import MessageInput from "./MessageInput";
import { Message } from "../utils/dataModel";
import { useChatContext } from "../context/ChatContext";
function ChatWindow() {
  const { selectedFriend, chats, chatEndRef } = useChatContext();

  if (!selectedFriend) {
    return (
      <div
        className="chat-window flex flex-col w-5/6"
        data-testid="chat-window-no-chat"
      >
        Please select a friend from the list to begin the chat
      </div>
    );
  }

  return (
    <div
      className="chat-window flex flex-col w-5/6 justify-between m-2"
      data-testid="chat-window-with-chat"
    >
      <h3
        className="text-xl font-bold text-right mx-4 px-2"
        data-testid="chat-window-selected-user"
      >
        {selectedFriend}
      </h3>
      <div className="flex flex-col">
        <div
          className="messages bg-gray-300 m-4 p-4"
          data-testid="chat-window-messages"
        >
          {chats[selectedFriend].map((message: Message, index: number) => (
            <div
              key={index}
              className={`mt-4 p-2 ${
                message.sender === "Me" ? "text-right " : "text-left "
              }`}
              data-testid={`chat-window-message-${selectedFriend}-${index}`}
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
