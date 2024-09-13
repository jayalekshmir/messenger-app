import React from "react";
import { cleanup, render, screen, within } from "@testing-library/react";
import FriendsList from "./FriendsList";
import { ChatContext } from "../context/ChatContext";

const setup = () => {
  const mockChatValue = {
    friendsList: ["John", "Doe", "Sam"],
    selectedFriend: "John",
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
      <FriendsList />
    </ChatContext.Provider>
  );
};

beforeEach(() => {
  setup();
});

afterEach(() => {
  cleanup();
});

test("renders friends-list-container div", () => {
  const containerElement = screen.getByTestId("friends-list-container");
  expect(containerElement).toBeInTheDocument();
});

test("lists all the available users in the left section", () => {
  const containerElement = screen.getByTestId("friends-list-group");
  expect(containerElement).toBeInTheDocument();
  const list = within(containerElement).getAllByRole("listitem");
  expect(list.length).toBe(3);
});
