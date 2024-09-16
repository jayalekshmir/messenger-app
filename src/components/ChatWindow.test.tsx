import React, { act } from "react";
import { render, screen, cleanup } from "@testing-library/react";
import ChatWindow from "./ChatWindow";
import { ChatContext } from "../context/ChatContext";
const setup = () => {
  const mockChatValue = {
    friendsList: ["John", "Doe", "Sam"],
    selectedFriend: "Doe",
    chats: {
      John: [],
      Doe: [],
      Sam: [],
    },
    sendMessage: jest.fn(),
    chatEndRef: jest.fn(),
    setSelectedFriend: jest.fn(),
  };
  render(
    <ChatContext.Provider value={mockChatValue}>
      <ChatWindow />
    </ChatContext.Provider>
  );
};

beforeEach(() => {
  setup();
});

afterEach(() => {
  cleanup();
});

test("renders chat-window-with-chat div", () => {
  const containerElement = screen.getByTestId("chat-window-with-chat");
  expect(containerElement).toBeInTheDocument();
});

test("shows the selected friends data at the top", () => {
  const selectedFriend = screen.getByTestId("chat-window-selected-user");
  expect(selectedFriend).toHaveTextContent("Doe");
});
