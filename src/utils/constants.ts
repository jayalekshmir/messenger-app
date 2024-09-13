export const friends: string[] = ["Alice", "Bob", "Charlie"];

export const initialSelectedFriend = "Alice";
export const initialChats = {
  Alice: [],
  Bob: [],
  Charlie: [],
};

export const conversation = [
  "hi",
  "hey",
  "everything is fine",
  "good",
  "how you doing",
];

export const pickRandomConversation = () => {
  return conversation[Math.floor(Math.random() * conversation.length)];
};
