import React, { useState, createContext } from "react";
import "./App.scss";
import FriendsList from "./components/FriendsList";
import ChatWindow from "./components/ChatWindow";
import { Message, ChatContextType } from "./utils/dataModel";
import { initialSelectedFriend, initialChats } from "./utils/constants";

export const ChatContext = createContext<ChatContextType | undefined>(
  undefined
);

function App() {
  const [selectedFriend, setSelectedFriend] = useState<string | null>(
    initialSelectedFriend
  );
  const [chats, setChats] = useState<Record<string, Message[]>>(initialChats);

  const sendMessage = (friend: string, message: string) => {
    setChats((prevChats) => ({
      ...prevChats,
      [friend]: [...prevChats[friend], { sender: "Me", text: message }],
    }));
  };

  return (
    <ChatContext.Provider
      value={{ selectedFriend, setSelectedFriend, chats, sendMessage }}
    >
      <div className="app flex flex-row">
        <FriendsList />
        <ChatWindow />
      </div>
    </ChatContext.Provider>
  );
}

export default App;
