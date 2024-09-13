import React from "react";
import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import MessageInput from "./MessageInput";
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
      <MessageInput />
    </ChatContext.Provider>
  );
};

beforeEach(() => {
  setup();
});

afterEach(() => {
  cleanup();
});

test("renders message-input-container div", () => {
  const messageFiledContainer = screen.getByTestId("message-input-container");
  expect(messageFiledContainer).toBeInTheDocument();
});

test("renders message-input-field", () => {
  const messageInputFiled = screen.getByTestId("message-input-field");
  expect(messageInputFiled).toBeInTheDocument();
});
