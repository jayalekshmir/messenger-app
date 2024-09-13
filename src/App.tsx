import React from "react";
import "./App.scss";
import FriendsList from "./components/FriendsList";
import ChatWindow from "./components/ChatWindow";
import { ChatProvider } from "./context/ChatContext";

function App() {
  return (
    <ChatProvider>
      <div
        className="app flex flex-row m-3.5 h-dvh"
        data-testid="app-container"
      >
        <FriendsList />
        <ChatWindow />
      </div>
    </ChatProvider>
  );
}

export default App;
