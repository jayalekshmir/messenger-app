import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { ChatContextType, Message } from "../utils/dataModel";
import {
  friends,
  initialChats,
  initialSelectedFriend,
  pickRandomConversation,
} from "../utils/constants";

export const ChatContext = createContext<ChatContextType | undefined>(
  undefined
);

export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChatContext must be used within a ChatProvider");
  }
  return context;
};

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedFriend, setSelectedFriend] = useState<string | null>(
    initialSelectedFriend
  );

  const [friendsList, setFriendsList] = useState(friends);
  const [chats, setChats] = useState<Record<string, Message[]>>(initialChats);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    chatEndRef?.current?.scrollIntoView({ behavior: "smooth" });
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
      {children}
    </ChatContext.Provider>
  );
};
