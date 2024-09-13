import React, { useState, createContext, useRef, useEffect } from "react";
import "./App.scss";
import FriendsList from "./components/FriendsList";
import ChatWindow from "./components/ChatWindow";
import { Message, ChatContextType } from "./utils/dataModel";
import {
  initialSelectedFriend,
  initialChats,
  pickRandomConversation,
  friends,
} from "./utils/constants";

export const ChatContext = createContext<ChatContextType | undefined>(
  undefined
);

function App() {
  const [selectedFriend, setSelectedFriend] = useState<string | null>(
    initialSelectedFriend
  );

  const [friendsList, setFriendsList] = useState(friends);
  const [chats, setChats] = useState<Record<string, Message[]>>(initialChats);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const updateFriendsList = () => {};

  useEffect(() => {
    scrollToBottom();
    updateFriendsList();
  }, [chats, selectedFriend]);

  const sendMessage = (friend: string, message: string) => {
    setChats((prevChats) => ({
      ...prevChats,
      [friend]: [
        ...prevChats[friend],
        { sender: "Me", text: message, time: new Date() },
      ],
    }));

    setTimeout(() => {
      setChats((prevChats) => ({
        ...prevChats,
        [friend]: [
          ...prevChats[friend],
          { sender: friend, text: pickRandomConversation(), time: new Date() },
        ],
      }));
    }, 500);
  };

  return (
    <ChatContext.Provider
      value={{
        selectedFriend,
        setSelectedFriend,
        chats,
        sendMessage,
        chatEndRef,
        friendsList,
      }}
    >
      <div className="app flex flex-row m-3.5 h-dvh">
        <FriendsList />
        <ChatWindow />
      </div>
    </ChatContext.Provider>
  );
}

export default App;
